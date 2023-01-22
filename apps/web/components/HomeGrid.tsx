import React from "react";
import Card from "./Card";

type HomeGridProps = {
  posts: Post[];
};

const HomeGrid = ({ posts }: HomeGridProps) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-8">
      {posts.map((post, i) => {
        return (
          <Card
            key={i}
            categories={post.categories}
            title={post.title}
            description={post.description}
            url={"post/" + post.slug.current}
            mainImage={post.mainImage}
          />
        );
      })}
    </div>
  );
};

export default HomeGrid;
