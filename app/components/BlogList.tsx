import React from "react";
import ClientSideRoute from "@/app/components/ClientSideRoute";
import Card from "./Card";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className='border-accent mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-24'>
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <Card post={post} />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
