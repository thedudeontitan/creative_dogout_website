"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Spline from "@splinetool/react-spline";


// const team_info = [
//   {
//     key: "1",
//     name: "John Doe",
//     position: "Position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "2",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "3",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "4",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "5",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "6",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "7",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
//   {
//     key: "8",
//     name: "John Doe",
//     position: "position",
//     image: "/pfp.png",
//     linkedin: "https://www.linkedin.com/in/ankit-kokane-795162197/",
//   },
// ];

function page() {
  return (
    <section className="">
      <div className="min-h-screen bg-black bg-opacity-70">

        <div className="bg-white h-screen  absolute -z-20"></div>
        <Spline
          className="h-screen top-0 right-0 left-0 absolute -z-10 "
          scene="https://prod.spline.design/vjAihqhjYhiHDc6X/scene.splinecode"
        />
        <div className="border-x mx-2 px-5 border-white text-white">
          <div className="mx-auto flex flex-col h-screen justify-center w-full">
            <div className="flex flex-col gap-5 lg:gap-0">
              <span className="lg:ml-96 mt-20 text-2xl lg:text-5xl font-medium lg:pr-10 px-2 lg:px-0">
                Stimulating growth for ambitious brands.
              </span>
              <div className=" border-b border-white lg:mt-6 lg:mb-20 -mx-5" />
              <span className="lg:ml-96 text-xl lg:text-2xl font-normal lg:pr-10 px-2 lg:px-0">
                We deliver inspirational brand experiences.
              </span>
              <span className="lg:ml-96 text-xl lg:text-2xl font-normal lg:mt-10 lg:pr-10 px-2 lg:px-0">
                Together, let&apos;s unlock growth!
              </span>
              <button className="lg:ml-96 lg:text-lg font-normal lg:mt-10 border border-white hover:border-black w-fit lg:mx-auto px-4 py-2 flex flex-row gap-x-2 items-center hover:scale-105 hover:bg-black hover:text-white transition-all duration-500">
                Let&apos;s connect <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-950 h-[80vh]"></div>
      <div className="bg-white lg:min-h-screen">
        <div className=" flex flex-col border mx-2 px-5 border-black gap-y-8 lg:pr-10 lg:px-0 pb-20">
          <span className="text-xl lg:text-4xl lg:ml-96 font-medium mt-10 lg:mt-20 lg:mb-10">
            Building through Purpose driven Communications.
          </span>
          <span className="lg:text-3xl lg:ml-96 font-medium">
            A B2B growth partner for several agencies and a stimulator for brands.
            We build, promote and protect businesses to rise above challenges -
            unlock growth potential.
          </span>
          <span className="lg:text-3xl lg:ml-96 font-medium">
            Creative Dugout started as a Media Content Agency that gradually
            evolved into a brand communications company with bold initiatives.
            Driven by perseverance, we instill confidence in our clients to power
            disruption.
          </span>
          <span className="lg:text-3xl lg:ml-96 font-medium">
            Creative Dugout is deeply rooted in multidimensional research and the
            methodology of delivering excellence in brand experience. Our
            interdisciplinary team delivers inspiration for ambitious brands to
            move with speed and enables them to foster strong relationships in the
            industry.
          </span>
          <span className="lg:text-2xl lg:ml-96">
            With Creative Dugout, you get a partner to operate, innovate and make
            winning brand experiences.{" "}
          </span>
          <button className="lg:ml-96 lg:text-lg font-normal lg:mt-5 border border-black mx-auto px-4 py-2 flex flex-row gap-x-2 items-center hover:scale-105 hover:bg-black hover:text-white transition-all duration-500">

            Know our expertise <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="bg-purple-950 h-[80vh]"></div>
      <div className="flex flex-col border-x mx-2 border-black gap-y-8 px-5">
        <span className="text-xl lg:text-3xl font-medium mt-10 lg:mt-20 lg:ml-96 lg:pr-10 px-2 lg:px-0">
          At Creative Dugout, our work principles act as a layer of protection
          for our clients.
        </span>
        <span className="lg:text-2xl lg:ml-96 lg:pr-10 px-2 lg:px-0">
          We deeply respect and care about our people and clients. We are
          committed to growth, retention, honesty and fair dealing. We align our
          expertise with stakeholders’ interests. We are dedicated to building
          long-term rewarding relationships with clients.
        </span>
        <div className="border-b border-black lg:mt-6 lg:mb-20 -mx-5" />
      </div>
      {/* <div className="flex flex-col border-x mx-2 border-black min-h-screen gap-y-8 lg:pr-10 px-2 lg:px-0">
        <span className="lg:text-4xl lg:ml-96 mt-20">Our People.</span>
        <span className="lg:text-2xl lg:ml-96">
          We have some curious, creative thinkers and problem solvers to
          cultivate your brand growth. Expect true commitment at every step .
        </span>
        <div className="lg:ml-96 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {team_info.map((info) => (
              <Link
                href={info.linkedin}
                className="flex flex-row"
                key={info.key}
              >
                <Image src={info.image} alt="" width={80} height={10} />
                <div className="flex flex-col px-5">
                  <span className="text-2xl text-gray-600">{info.name}</span>
                  <span className="text-xl text-gray-600">{info.position}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default page;
