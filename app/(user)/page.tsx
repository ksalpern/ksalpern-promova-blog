import React from "react";
import { client } from "@/sanity/lib/client";

import BlogList from "@/app/components/BlogList";

import { POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60; //revalidates this page every 60 seconds

export default async function HomePage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
}
