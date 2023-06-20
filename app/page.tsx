"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <section className="">
      <div className="flex flex-col border-x mx-2 border-black min-h-screen">
        <div className="bg-white h-screen  absolute -z-20"></div>
        <Spline
          className="h-screen top-0 right-0 left-0 absolute -z-10 "
          scene="https://prod.spline.design/vjAihqhjYhiHDc6X/scene.splinecode"
        />
        <div className="flex flex-col justify-center h-screen bg ">
          <div className="text-5xl text-black font-medium lg:ml-20">
            Innovate . Inspire . Evolve
          </div>
          <div className="text-4xl text-black font-medium lg:ml-20 mt-20">
            We build the most resilient and sustainable brands
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="lg:ml-96">
          <span className="text-4xl">Our expertise includes:</span>
        </div>
      </div>
    </section>
  );
}
