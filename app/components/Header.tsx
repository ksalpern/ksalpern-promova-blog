import Link from "next/link";

export const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <h1>Ksenia&apos;s Blog</h1>
      <nav className='flex items-center space-x-2'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

