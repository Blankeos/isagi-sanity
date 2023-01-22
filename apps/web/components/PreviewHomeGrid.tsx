"use client";

import React from "react";
import { usePreview } from "../lib/sanity.preview";
import HomeGrid from "./HomeGrid";

type PreviewHomeGridProps = {
  query: string;
};

const PreviewHomeGrid = ({ query }: PreviewHomeGridProps) => {
  const posts = usePreview(null, query);
  console.log("Loading posts...", posts);

  return <HomeGrid posts={posts} />;
};

export default PreviewHomeGrid;
