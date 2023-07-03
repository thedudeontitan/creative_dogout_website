"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos > currentScrollPos;

      setIsScrolled(isScrolledUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div>
      {/* {show && */}
      <nav
        className={`flex flex-row top-0 right-0 left-0 bg-white fixed w-full transition-all duration-500 ${
          isScrolled
            ? "transform -translate-y-0"
            : "transform -translate-y-full"
        } bg-white`}
      >
        <div className="flex flex-row my-5 mx-auto gap-x-14">
          <Link
            href="/about"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">About</div>
          </Link>
          <Link
            href="/expertise"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Expertise</div>
          </Link>
          <Link
            href="/work"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Work</div>
          </Link>
          <Link
            href="/blogs"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Blogs</div>
          </Link>
          <Link
            href="/contact"
            className="border-b-2 border-transparent hover:border-black transition-all duration-500"
          >
            <div className="text-black">Contact</div>
          </Link>
        </div>
        <button className="bg-black text-white text-base font-medium px-2 py-1  mr-5 my-3">
          Let&apos;s Talk
        </button>
      </nav>
      {/* } */}
    </div>
  );
}

export default Navbar;
