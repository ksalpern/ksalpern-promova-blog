import Link from "next/link";

export const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5 border-b border-accent mb-5'>
      <h1 className='text-4xl'>
        <Link href='/'>Ksenia&apos;s Blog</Link>
      </h1>
    </header>
  );
};
