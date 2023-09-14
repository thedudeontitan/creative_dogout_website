"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation"

function Navbar() {
  const path = usePathname();
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
        className={`z-40 flex flex-row top-0 right-0 left-0  fixed w-full transition-all duration-500 ${
          isScrolled
            ? "transform -translate-y-0"
            : "transform -translate-y-full"
        } ${path=="/"?"bg-black text-white":"bg-white text-black"}`}
      >
        <div className="flex flex-row my-5 mx-auto gap-x-14">
          <Link
            href="/about"
            className="border-b-2 border-transparent hover:border-white transition-all duration-500"
          >
            <div className="">About</div>
          </Link>
          <Link
            href="/expertise"
            className="border-b-2 border-transparent hover:border-white transition-all duration-500"
          >
            <div className="">Expertise</div>
          </Link>
          <Link
            href="/work"
            className="border-b-2 border-transparent hover:border-white transition-all duration-500"
          >
            <div className="">Work</div>
          </Link>
          <Link
            href="/blogs"
            className="border-b-2 border-transparent hover:border-white transition-all duration-500"
          >
            <div className="">Blogs</div>
          </Link>
        </div>
        <Link className="bg-black text-white text-base font-medium px-2 py-1  mr-5 my-3 flex items-center" href="/contact">
          Let&apos;s Talk
        </Link>
      </nav>
      {/* } */}
    </div>
  );
}

export default Navbar;
