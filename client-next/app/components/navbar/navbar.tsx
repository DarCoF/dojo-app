"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles.navbar.css";
import "../ui-comps/button/styles.button.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-600 py-2 bg-navbar-color">
      <div className="flex justify-between items-center h-16 px-4 lg:px-12">
        {/* Center TAP */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mix-blend-difference">
          <Link href="/">
            <h1 className="text-lg tracking-widest text-white font-bold text-2xl">TAP</h1>
          </Link>
        </div>
        {/* Right-side navigation */}
        <div className="flex items-center">
          <button
            className="lg:hidden text-gray-800 ml-3"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <nav
            className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}
          >
            <ul className="text-base text-white lg:flex lg:justify-between">
              <li className="lg:px-5 py-2 hover:text-red-900 font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-red-900 font-semibold">
                <Link href="/about">About</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-red-900 font-semibold">
                <Link href="/register">Register</Link>
              </li>
              <li className="py-2 px-4 lg:px-6 lg:py-2 animated-border text-white rounded-xl font-semibold">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
