"use client"; // This tells Next.js that this component should be a Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.navbar.css';
import '../ui-comps/button/styles.button.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [seo, setSeo] = useState("Test");

  return (
    <>
      <header className="border-b border-gray-600 py-2 bg-navbar-color">
        <div className="flex xl:me-96 lg:me-72 md:me-36 sm:me-24 me-12 justify-end items-center h-12">
          <div className="flex items-center bg-white px-4 py-2 h-16">
            <Link href="/">
            <p className="text-lg text-gray-800">
            TAP
            </p>
            </Link>
            <button
              className="lg:hidden text-gray-800 ml-3 item-center"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {/* Here you could add an icon for the menu toggle button */}
              ☰
            </button>
            <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
              <ul className="text-base text-gray-800 lg:flex lg:justify-between">
                <li className="lg:px-5 py-2 hover:text-red-900 font-semibold">
                  <Link href="/">Home</Link>
                </li>
                <li className="lg:px-5 py-2 hover:text-red-900 font-semibold">
                  <Link href="/about">About</Link>
                </li>
                <li className="lg:px-5 py-2 hover:text-red-900 font-semibold">
                  <Link href="/register">Register</Link>
                </li>
                <li className="py-2 px-4 lg:px-6 lg:py-2 bg-black text-white rounded-xl font-semibold animated-border">
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
