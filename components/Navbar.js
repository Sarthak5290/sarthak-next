"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../public/avatar2.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true); // Track scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0); // Store last scroll position

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    // Check if scrolling up
    if (currentScroll < lastScrollTop) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }

    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Ensure scroll position doesn't go negative
  }, [lastScrollTop]); // Memoize the handleScroll function

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Using the memoized version of handleScroll

  return (
    <navbar
      className={`fixed mt-5 inset-x-0 top-2 z-30 mx-auto w-full max-w-screen-md border border-gray-100 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-300 ${
        scrollingUp ? "bg-white/80 dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="h-7 w-auto rounded-full"
                src={Avatar}
                alt="Website Logo"
                width={28}
                height={28}
              />
              <p className="text-lg font-bold">Sarthak Gaikwad</p>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-end gap-6">
            <Link
              href="https://github.com/sarthak5290" // Add your GitHub profile link
              target="_blank" // Open GitHub in a new tab
              className="inline-flex items-center justify-center rounded-xl bg-transparent p-2 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.804 8.207 11.396.6.111.793-.259.793-.577 0-.285-.011-1.043-.017-2.053-3.338.726-4.043-1.607-4.043-1.607-.544-1.383-1.332-1.754-1.332-1.754-1.088-.743.082-.728.082-.728 1.205.084 1.839 1.24 1.839 1.24 1.071 1.832 2.809 1.303 3.495.998.107-.776.419-1.303.762-1.603-2.667-.303-5.467-1.333-5.467-5.932 0-1.309.468-2.378 1.237-3.216-.124-.303-.537-1.524.117-3.172 0 0 1.006-.322 3.298 1.228.957-.266 1.985-.399 3.006-.403 1.021.004 2.049.137 3.006.403 2.293-1.55 3.298-1.228 3.298-1.228.655 1.648.241 2.869.117 3.172.77.838 1.237 1.907 1.237 3.216 0 4.61-2.801 5.629-5.47 5.932.431.366.806 1.086.806 2.191 0 1.583-.014 2.866-.014 3.248 0 .318.193.688.798.576C20.565 21.804 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 bg-transparent">
          <Link
            href="https://github.com/sarthak5290" // Add your GitHub profile link
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl bg-transparent p-2 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-200 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.804 8.207 11.396.6.111.793-.259.793-.577 0-.285-.011-1.043-.017-2.053-3.338.726-4.043-1.607-4.043-1.607-.544-1.383-1.332-1.754-1.332-1.754-1.088-.743.082-.728.082-.728 1.205.084 1.839 1.24 1.839 1.24 1.071 1.832 2.809 1.303 3.495.998.107-.776.419-1.303.762-1.603-2.667-.303-5.467-1.333-5.467-5.932 0-1.309.468-2.378 1.237-3.216-.124-.303-.537-1.524.117-3.172 0 0 1.006-.322 3.298 1.228.957-.266 1.985-.399 3.006-.403 1.021.004 2.049.137 3.006.403 2.293-1.55 3.298-1.228 3.298-1.228.655 1.648.241 2.869.117 3.172.77.838 1.237 1.907 1.237 3.216 0 4.61-2.801 5.629-5.47 5.932.431.366.806 1.086.806 2.191 0 1.583-.014 2.866-.014 3.248 0 .318.193.688.798.576C20.565 21.804 24 17.302 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </Link>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;
