import React from "react";
// import { previewData } from "next/headers";
// import groq from "groq";
import { client } from "@/sanity/lib/client";
// import PreviewSuspense from "@/app/components/PreviewSuspense";
// import PreviewBlogList from "@/app/components/PreviewBlogList";
import BlogList from "@/app/components/BlogList";
// import Posts from "@/app/components/Posts";
// import Card from "@/app/components/Card";
import { POSTS_QUERY } from "@/sanity/lib/queries";
// const query = groq`
//  *[_type=='post'] {
//   ...,
//   author->,
//   categories[]->
//  } | order(_createdAt desc)[0...3]
//  `;

export const revalidate = 60; //revalidates this page every 60 seconds

export default async function HomePage() {
  // if (previewData()) {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <>
      {/* // <PreviewSuspense
      //   fallback={
        //     <div role="status">
        //       <p className="text-center text-lg animate-pulse text-accent">
        //         Loading Preview Data...
        //       </p>
        //     </div>
        //   }
        // >
        //   <PreviewBlogList query={query}/>
        // </PreviewSuspense>
        // <Posts posts={posts} />*/}
        <BlogList posts={posts} /> 
      {/* {posts.length > 0 && posts.map((post) => <Card key={post._id} />)} */}
    </>
  );
  // }
  // const posts = await client.fetch(query);
  // return <BlogList posts={posts}/>;
}
