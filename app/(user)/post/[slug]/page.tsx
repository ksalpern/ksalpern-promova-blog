import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import urlFor from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/components/RichTextComponents";
import { POST_QUERY, POSTS_SLUG_QUERY } from "@/sanity/lib/queries";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; //revalidates this page every 60 seconds

export async function generateStaticParams() {
  const slugs: Post[] = await client.fetch(POST_QUERY);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const post: Post = await client.fetch(POSTS_SLUG_QUERY, { slug });

  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-accent text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='p-5 bg-accent w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='font-extrabold text-4xl'>{post.title}</h1>

                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;
