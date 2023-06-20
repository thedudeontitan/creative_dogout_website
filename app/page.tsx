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
      <div className="bg-black">
        <div className="text-white flex flex-col border-x mx-2 border-white min-h-screen pr-10">
          <div className="lg:ml-96 flex flex-col mb-24">
            <span className="text-5xl lg:mt-20 lg:mb-40">
              Our expertise includes:
            </span>
            <div className="flex flex-row w-full gap-x-8 mt-14">
              <span className="border-t pt-6 text-2xl w-full">
                Brand Strategy
              </span>
              <span className="border-t pt-6 text-2xl w-full">
                Innovation
              </span>
            </div>
            <div className="flex flex-row w-full gap-x-8 mt-14">
              <span className="border-t pt-6 text-2xl w-full">
                Content Strategy
              </span>
              <span className="border-t pt-6 text-2xl w-full">
                Technology
              </span>
            </div>
            <div className="flex flex-row w-full gap-x-8 mt-14">
              <span className="border-t pt-6 text-2xl w-full">
                Design Strategy
              </span>
              <span className="border-t pt-6 text-2xl w-full">
                Data & Insights
              </span>
            </div>
            <div className="flex flex-row w-full gap-x-8 mt-14">
              <span className="border-t pt-6 text-2xl w-full">
                Brand Experience
              </span>
              <span className="border-t pt-6 text-2xl w-full">
                Web & App Design
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="text-white flex flex-col border-x border-t mx-2 border-white min-h-screen pr-10">
          <div className="lg:ml-96 flex flex-col mb-24">
            <span className="text-5xl font-medium lg:mt-20 lg:mb-40">
              Levers of Brand Success.
            </span>
            <div className="flex flex-row gap-5">
              <div className="border border-white flex flex-col p-5 pb-56 w-full">
                <span className="text-3xl pb-5">Inovation</span>
                <span className="text-lg">
                  Position your brand with a fulfilling promise and purpose
                  worth dealing with.
                </span>
              </div>
              <div className="border border-white flex flex-col p-5 pb-56 w-full">
                <span className="text-3xl pb-5">Inspiration</span>
                <span className="text-lg">
                  Frame your business with disruptive ideas, bold moves and
                  transformative brand experiences.
                </span>
              </div>
              <div className="border border-white flex flex-col p-5 pb-56 w-full">
                <span className="text-3xl pb-5">Evolution</span>
                <span className="text-lg">
                  Keep moving fluidly to maintain relevancy in the market on the
                  pulse of cultural changes and trends.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
