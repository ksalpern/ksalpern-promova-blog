import React from "react";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";

const Card = ({ post }: { post: Post }) => {
  return (
    <div className='w-full min-h-60 rounded-3xl p-0.5 max-h-[500px] relative after:absolute after:size-1/2 after:rounded-full after:bg-violet-800 after:bottom-0 after:right-0 after:transform after:translate-x-1/2 after:translate-y-1/2 overflow-hidden after:blur-3xl flex flex-col before:absolute before:size-1/2 before:rounded-full before:bg-fuchsia-800 before:top-0 before:left-0 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:blur-3xl border border-white/5 group'>
      <div className='bg-black/10 backdrop-blur-3xl flex-1 rounded-3xl relative z-10 p-2 flex flex-col gap-2 md:gap-4 overflow-y-auto'>
        <div className='w-full min-h-40 overflow-hidden rounded-2xl relative'>
          <Image
            src={urlFor(post.mainImage).url()}
            // width={100}
            // height={100}
            // style={{
            //   width: "100%",
            //   height: "auto",
            // }}
            fill
            alt={post.author.name}
            className='object-cover w-full h-full group-hover:scale-105 duration-200'
          />
        </div>
        <div>
          <p className='font-bold'>{post.title}</p>
          <p>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
          {post.categories?.map((category) => (
            <div
              key={category.title}
              className='bg-accent text-center text-black px-3 py-1 rounded-full text-sm font-semibold'
            >
              <p>{category.title}</p>
            </div>
          ))}
        </div>
        <div className='mt-5 flex-1'>
          <p className='underline text-lg font-bold'>{post.title}</p>
          <p className='line-clamp-2 text-gray-500'>{post.description}</p>
        </div>
        <p className='mt-5 font-bold flex items-center group-hover:underline'>
          Read Post
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='ml-2 h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Card;
