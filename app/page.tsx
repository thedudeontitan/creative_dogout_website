"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { Reveal } from "./(components)/Reveal";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { lever, expertise_data, testimony_data } from "./(models)/home"
import { useEffect } from "react";


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimony_data.length);
    }
  };

  const handlePrev = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimony_data.length) % testimony_data.length);
    }
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setTransitioning(false);
    }, 300); // Adjust the duration of the transition (in milliseconds) as needed

    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);


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
            Innovate. Inspire. Evolve.
          </div>
          <div className="text-4xl text-black font-medium lg:ml-20 mt-20">
            We build the most resilient and sustainable brands
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="text-white flex flex-col border-x mx-2 border-white min-h-screen pr-10">
          <div className="lg:ml-96 flex flex-col mb-24">
            <div className="lg:mt-20 lg:mb-24">
              <Reveal>
                <span className="text-5xl">Our expertise includes:</span>
              </Reveal>
            </div>
            <div className="grid lg:grid-cols-2 gap-y-20">
              {expertise_data.map((data) => (
                <div key={data.key}>
                  <Reveal>
                    <div className="border-t xl:w-[60vh] flex">
                      <span className="my-auto mt-4 text-2xl ">
                        {data.title}
                      </span>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="text-white flex flex-col border-x border-t mx-2 border-white min-h-screen pr-10">
          <div className="lg:ml-96 flex flex-col mb-24">
            <div className="lg:mt-20 lg:mb-40">
              <Reveal>
                <span className="text-5xl font-medium">
                  Levers of Brand Success.
                </span>
              </Reveal>
            </div>
            <div className="flex flex-row gap-5">
              {lever.map((data) => (
                <div>
                  <Reveal>
                    <div className="border border-white flex flex-col p-5 pb-56 w-[23rem] h-[10rem]">
                      <span className="text-3xl pb-5">{data.title}</span>
                      <span className="text-lg">
                        {data.description}
                      </span>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-x border-t mx-2 border-black min-h-screen pr-10">
        <span className="mt-20 text-5xl font-medium lg:ml-96">Our clients vouch for us.</span>
        <div className="overflow-hidden lg:ml-96">
          <div className="mt-20 text-2xl gap-6 flex">
            <div className="text-2xl">{currentIndex + 1} - {testimony_data.length}</div>
            <button onClick={handlePrev} className=" hover:scale-125 transition-all duration-500"><FiArrowLeft /> </button>
            <button onClick={handleNext} className=" hover:scale-125 transition-all duration-500"><FiArrowRight /></button>
          </div>
          <div
            className={`mt-10 text-[37px] leading-10 font-medium mr-10 transform translate-x-0 opacity-0 transition-all duration-700 ease-out ${transitioning ? 'translate-x-[250%] opacity-0' : 'translate-x-0 opacity-100'
              }`}
          >
            <p>"{testimony_data[currentIndex].comment}"</p>
          </div>
          <div className="flex flex-row mt-16 ">
            <button className="flex-grow border-t border-purple-500 mr-12 " onClick={() => (setCurrentIndex(testimony_data[currentIndex].key -1))}>
              <div className="flex flex-col text-2xl items-start">
                <span className="font-medium ">{testimony_data[currentIndex].name}</span>
                <span className="">{testimony_data[currentIndex ].role}</span>
                <span>{testimony_data[currentIndex].company}</span>
              </div>
            </button>
            <button className="flex-grow mr-12" onClick={() => (setCurrentIndex(testimony_data[currentIndex].key))}>
              <div className="flex flex-col text-2xl items-start">
                <span className="font-medium ">{testimony_data[currentIndex + 1].name}</span>
                <span className="">{testimony_data[currentIndex + 1].role}</span>
                <span>{testimony_data[currentIndex + 1].company}</span>
              </div>
            </button>
            <button className="flex-grow mr-12" onClick={() => ((testimony_data[currentIndex].key +1)?setCurrentIndex(testimony_data[currentIndex].key +1):testimony_data[currentIndex].key)}>
              <div className="flex flex-col text-2xl items-start">
                <span className="font-medium ">{testimony_data[currentIndex + 2].name}</span>
                <span className="">{testimony_data[currentIndex + 2].role}</span>
                <span>{testimony_data[currentIndex + 2].company}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
