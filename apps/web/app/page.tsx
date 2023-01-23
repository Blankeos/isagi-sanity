import { Button } from "ui";
import Card from "../components/Card";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewHomeGrid from "../components/PreviewHomeGrid";
import HomeGrid from "../components/HomeGrid";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Web() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-blue-600">
              Loading Preview Data....
            </p>
          </div>
        }
      >
        <PreviewHomeGrid query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <div className="fluid-container py-20">
      {/* <h1>Web (/)</h1>
      <Button /> */}
      <HomeGrid posts={posts} />
    </div>
  );
}
