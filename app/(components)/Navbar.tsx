"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";

function Navbar() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollInit, setScrollInit] = useState(0);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledUp = prevScrollPos > currentScrollPos;
      setScrollInit(currentScrollPos);
      setIsScrolled(isScrolledUp);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  }

  return (
    <div>
      <div className={`fixed h-16 w-16 lg:h-20 lg:w-20 ml-8 mt-6 bg-purple-700 hover:scale-[1.02] transition-all z-40
      ${scrollInit == 0 ? "" : "hidden lg:flex"}
      ${mobileNavVisible ? "hidden" : ""}
      `}>
        <Link className="" href="/">
          <Image
            src="/logo_final_BGP.jpg"
            alt="logo"
            fill={true}
            className=""
          />
        </Link>
      </div>
      <nav
        className={`hidden z-30 lg:flex flex-row top-0 right-0 left-0  fixed w-full transition-all duration-500 
        ${isScrolled ? "transform -translate-y-0" : "transform -translate-y-full"}
        ${(scrollInit != 0) ? (path == "/" || path == "/brandcommunication" || path == "/blogs") ? "bg-black text-white" : "bg-white text-black" : (path == "/" || path == "/brandcommunication" || path == "/blogs") ? "bg-transparent text-white" : "bg-transparent text-black"}
        `}
      >
        <div className="flex flex-row my-5 mx-auto gap-x-14">
          <Link
            href="/about"
            className={`border-b-2 border-transparent  transition-all duration-500 ${(path == "/" || path == "/brandcommunication" || path == "/blogs") ? "hover:border-white" : "hover:border-black"}`}
          >
            <div className="">About</div>
          </Link>
          <Link
            href="/expertise"
            className={`border-b-2 border-transparent  transition-all duration-500 ${(path == "/" || path == "/brandcommunication" || path == "/blogs") ? "hover:border-white" : "hover:border-black"}`}
          >
            <div className="">Expertise</div>
          </Link>
          <Link
            href="/brandcommunication"
            className={`border-b-2 border-transparent  transition-all duration-500 ${(path == "/" || path == "/brandcommunication" || path == "/blogs") ? "hover:border-white" : "hover:border-black"}`}
          >
            <div className="">Brand Communication</div>
          </Link>
          <Link
            href="/blogs"
            className={`border-b-2 border-transparent  transition-all duration-500 ${(path == "/" || path == "/brandcommunication" || path == "/blogs") ? "hover:border-white" : "hover:border-black"}`}
          >
            <div className="">Blogs</div>
          </Link>
        </div>
        <Link className={` text-base font-medium px-2 py-1  mr-5 my-3 flex items-center ${(path == "/" || path == "/brandcommunication" || path == "/blogs") ? "border-white border text-white" : "border-black border text-black"}`} href="/contact">
          Let&apos;s Talk
        </Link>
      </nav>

      <nav className={`z-30 fixed flex items-center lg:hidden w-screen ${(path == "/" || path == "/brandcommunication" || path == "/blogs") ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className={`transition-all overflow-clip w-20 h-8 flex items-center ml-4 ${scrollInit == 0 ? "hidden" : ""}`}>
          <div className="relative w-16 h-16 ">
            <Link href="/">
              <Image
                src="/logo_final_BGP.jpg"
                alt="logo"
                fill={true}
                className=""
              />
            </Link>
          </div>
        </div>
        <button onClick={handleMobileNav} className="font-medium ml-auto p-2 m-3" >Menu</button>
        {
          mobileNavVisible &&
          <div  onClick={handleMobileNav} className=" absolute h-screen w-screen text-white bg-black z-[4000] top-0 bottom-0 flex flex-col">
            <button className="absolute text-white font-medium top-0 right-0 p-2 m-3 h-fit w-fit">Close</button>
            <div className="relative flex left-0 top-0 flex-col px-5 pt-10 text-3xl gap-8 font-medium">
              <Link href="/about">
                About
              </Link>
              <Link href="/expertise">
                Expertise
              </Link>
              <Link href="/brandcommunication">
                Brand Communication
              </Link>
              <Link href="/blogs">
                Blogs
              </Link>
            </div>
            <Link className={`mt-auto mb-10 border border-white justify-center mx-5 text-base font-medium py-2 flex items-center `} href="/contact">
              Let&apos;s Talk
            </Link>
          </div>
        }
      </nav>
    </div>
  );
}

export default Navbar;
