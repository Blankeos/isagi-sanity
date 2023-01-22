import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import CategoryBadge from "../../../components/CategoryBadge";
import urlFor from "../../../lib/urlFor";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <div className="fluid-container">
      <article>
        <section className="relative p-10">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              className="object-cover grayscale relative"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-70" />
          </div>
          <section className="relative flex flex-col">
            <div className="flex py-4">
              {post.categories.map((cat, i) => (
                <CategoryBadge key={i}>{cat.title}</CategoryBadge>
              ))}
            </div>

            {/* Written Stuff */}
            <div className="flex flex-col gap-y-2">
              <h1 className="text-white font-bold text-2xl">{post.title}</h1>
              <p className="text-blue-100 mb-2">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="flex items-center gap-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div>
                  <h3 className="text-blue-100">{post.author.name}</h3>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>Heading here</section>
      </article>
    </div>
  );

  return <div className="fluid-container">Post {slug}</div>;
};

export default Post;
