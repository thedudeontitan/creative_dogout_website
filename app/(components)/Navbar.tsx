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
      const currentScrollPos = window.scrollY;
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
        className={`z-40 flex flex-row top-0 right-0 left-0  fixed w-full transition-all duration-500 
        ${isScrolled ? "transform -translate-y-0" : "transform -translate-y-full"}
        ${(window.scrollY != 0)?(path=="/"|| path== "/brandcommunication")?"bg-black text-white":"bg-white text-black":(path=="/"|| path== "/brandcommunication")?"bg-transparent text-white":"bg-transparent text-black"}
        `}
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
            href="/brandcommunication"
            className="border-b-2 border-transparent hover:border-white transition-all duration-500"
          >
            <div className="">Brand Communication</div>
          </Link>
          <Link
            href="/blogs"
            className="border-b-2 border-transparent hover:border-white transition-all duration-500"
          >
            <div className="">Blogs</div>
          </Link>
        </div>
        <Link className={` text-base font-medium px-2 py-1  mr-5 my-3 flex items-center ${(path=="/"|| path== "/brandcommunication")?"border-white border text-white":"border-black border text-black"}`} href="/contact">
          Let&apos;s Talk
        </Link>
      </nav>
      {/* } */}
    </div>
  );
}

export default Navbar;
