"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles.navbar.css";
import "../ui-comps/button/styles.button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import UserProfileCard from "../ui-comps/user-dropdown/dropdown";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = true;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <header className="border-b border-gray-600 py-2 bg-navbar-color">
          <div className="flex justify-between items-center h-16 px-4 lg:px-12">
            {/* Center TAP */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mix-blend-difference">
              <Link href="/">
                <h1 className="text-2lg tracking-widest text-white font-bold text-2xl">TAP</h1>
              </Link>
            </div>
            {/* Left-side navigation */}
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
                  {isLoggedIn && (
                    <li
                      className="relative py-2 px-4 lg:px-6 lg:py-2"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <Link href="/profile">
                        <FontAwesomeIcon icon={faUserNinja} size="lg" />
                      </Link>
                      {showDropdown && (
                        <div className="absolute top-full mt-2 left-0">
                          <UserProfileCard
                            imageUrl="/assets/john-wick.jpg"
                            altText="User Profile"
                            name="John Wick"
                            description="Retired boogieman"
                            onProfile={() => console.log("Profile")}
                            onSettings={() => console.log("Settings")}
                            onLogout={() => console.log("Logout")}
                            isDropdownVisible={showDropdown}
                          />
                        </div>
                      )}
                    </li>
                  )}
                  <li className="lg:px-5 py-2 the-red font-semibold">
                    <Link href="/the-project">Project</Link>
                  </li>
                  <li className="lg:px-5 py-2 the-red font-semibold">
                    <Link href="/graph">Map</Link>
                  </li>
                  <li className="lg:px-5 py-2 the-red font-semibold">
                    <Link href="/tutorials">Tutorials</Link>
                  </li>
                  <li className="lg:px-5 py-2 the-red font-semibold">
                    <Link href="/register">Register</Link>
                  </li>
                  <li className="py-2 px-4 lg:px-6 lg:py-2 animated-border text-white rounded-xl font-semibold">
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Right-side navigation */}
            <div className="flex items-center">
              <Link href="/donation-gateway">
                <FontAwesomeIcon icon={faDonate} size="lg" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
