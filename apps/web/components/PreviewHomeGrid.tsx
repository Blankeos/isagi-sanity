"use client";

import React from "react";
import { usePreview } from "../lib/sanity.preview";
import HomeGrid from "./HomeGrid";

type PreviewHomeGridProps = {
  query: string;
};

const PreviewHomeGrid = ({ query }: PreviewHomeGridProps) => {
  console.log("fetching preview");
  const posts = usePreview(null, query);
  console.log("Loading posts...", posts);

  return (
    <div className="fluid-container py-20">
      <HomeGrid posts={posts} />
    </div>
  );
};

export default PreviewHomeGrid;
