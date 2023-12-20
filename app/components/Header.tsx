"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <Link href="#features" className="hover:text-accentCyan">
          Features
        </Link>
        <Link href="#testimonials" className="hover:text-accentCyan">
          Testimonials
        </Link>
        <button
          id="theme-toggle"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:right-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          {theme === "light" && (
            <MdLightMode className="w-5 h-5" onClick={() => setTheme("dark")} />
          )}
          {theme === "dark" && (
            <FaMoon className="w-5 h-5" onClick={() => setTheme("light")} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
