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
    <section className="bg-black">
      <div className=" flex flex-col border-x mx-2 border-white min-h-screen">

        <div className="flex flex-col justify-center h-screen bg ">
          <div className="text-5xl text-white font-medium lg:ml-20">
            Innovate. Inspire. Evolve.
          </div>
          <div className="text-4xl text-white font-medium lg:ml-20 mt-20">
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
                <div key={data.key}>
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
      <div className="flex flex-col border-x border-t mx-2 text-white border-white min-h-screen pr-10 pb-20">
        <span className="mt-20 text-5xl font-medium lg:ml-96">Our clients vouch for us.</span>
        <div className="overflow-hidden lg:ml-96">
          <div className="mt-20 text-2xl gap-6 flex">
            <div className="text-2xl">{currentIndex + 1} - {testimony_data.length}</div>
            <button onClick={handlePrev} className="hover:scale-125 transition-all duration-500"><FiArrowLeft /> </button>
            <button onClick={handleNext} className="hover:scale-125 transition-all duration-500"><FiArrowRight /></button>
          </div>
          <div
            className={`mt-10 h-80 text-[37px] leading-10 font-medium mr-10 transform translate-x-0 opacity-0 transition-all duration-700 ease-out ${transitioning ? 'translate-x-[250%] opacity-0' : 'translate-x-0 opacity-100'
              }`}
          >
            <p>&quot;{testimony_data[currentIndex] && testimony_data[currentIndex].comment}&quot;</p>
          </div>
          <div className="flex flex-row mt-16">
            {testimony_data.map((data, index) => (
              <button
                key={data.key}
                className={`pt-2  w-fit mr-12 ${index === currentIndex ? 'active border-t border-purple-500' : ''}`}
                onClick={() => (setCurrentIndex(data.key - 1), console.log(currentIndex))}
              >
                <div className="flex flex-col text-2xl items-start">
                  <span className="font-medium ">{data.name}</span>
                  <span className="">{data.role}</span>
                  <span>{data.company}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col border-x text-white border-t mx-2 border-white pr-10 pb-20 lg:pl-96">

        <div className="mt-20 flex flex-col text-5xl font-medium">
          <span>We are born to disrupt,</span>
          <span>are you?</span>
        </div>
        <div className="mt-20 text-2xl flex flex-col">
          <span>Don&apos;t just dream of building your brand, if you’re a firm believer.</span>
          <span>If you are ready to experience growth, join forces with us and we will differentiate you from the rest.</span>
          <span className="mt-10">Rest assured your customers won’t reach your competitors.</span>
        </div>
      </div>
      <div className="flex flex-col border-x text-white border-t mx-2 border-white pr-10 pb-20 lg:pl-96">

          <span className="mt-20 text-5xl font-medium">Let’s grow together!</span>
          
        <button className=" border-white border w-fit px-4 py-2 mt-10 text-lg font-medium hover:scale-110 transition-all">Connect with us <FiArrowRight className="inline-block text-2xl"/></button>
      </div>
      
    </section>
  );
}
