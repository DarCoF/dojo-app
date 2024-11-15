"use client"; // This tells Next.js that this component should be a Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [seo, setSeo] = useState("Test");

  return (
    <>
      <header className="border-b border-gray-300 py-2">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
          <Link href="/">
            <Image
              src="/public/assets/EggLogo.svg"
              alt="logo"
              width={220}
              height={55}
              className="cursor-pointer"
            />
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {/* Here you could add an icon for the menu toggle button */}
            ☰
          </button>
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/about">About</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/register">Register</Link>
              </li>
              <li className="py-2 px-4 lg:px-6 lg:py-2 bg-blue-700 text-white rounded-xl font-semibold">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
