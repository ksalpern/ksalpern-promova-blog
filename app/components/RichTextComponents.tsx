import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/urlFor";
import { PortableTextTypeComponentProps } from "@portabletext/react";

export const RichTextComponents = {
  types: {
    image: ({
      value,
    }: PortableTextTypeComponentProps<{ asset: Reference }>) => {
      return (
        <div className='relative w-full h-96 m-10 mx-auto'>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='blog post image'
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className='mt-lg list-decimal'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className='text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className='text-3xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className='text-2xl py-10 font-bold'>{children}</h4>
    ),

    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className='border-l-accent border-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: { href: string };
    }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-accent hover:decoration-black'
        >
          {children}
        </Link>
      );
    },
  },
};
