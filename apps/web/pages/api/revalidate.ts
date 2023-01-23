import { NextApiRequest, NextApiResponse } from "next";

import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { Readable } from "stream";

const secret = process.env.MY_SECRET_TOKEN || "INVALID_TOKEN";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request

  // (-Original Docs-)
  // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  // (-@sanity/webhook Docs- https://github.com/sanity-io/webhook-toolkit)
  const signature: any = req.headers[SIGNATURE_HEADER_NAME];
  const body = await readBody(req); // Read the body into a string

  if (!isValidSignature(body, signature, secret)) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid signature" });
  }

  const jsonBody = JSON.parse(body);

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(`/post/${jsonBody.slug.current}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
