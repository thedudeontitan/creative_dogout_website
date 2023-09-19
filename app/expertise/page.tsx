import React from "react";
import { BsArrowRight } from "react-icons/bs";

function page() {
  return (
    <section className="bg-white">
      <div className="flex flex-col border-x mx-2 border-black min-h-screen ">
        <div className="mx-auto flex flex-col w-full">
          <div className="flex flex-col lg:mt-60 mb-10">
            <span className="lg:ml-96 mt-32 lg:mt-20 text-3xl lg:text-5xl font-medium lg:pr-10 px-2 lg:px-0">
              Building progressive brands
            </span>
            <div className=" border-b border-black mt-10 lg:mt-6 mb-10 " />
            <span className="lg:ml-96 text-xl lg:text-2xl lg:font-medium lg:pr-10 px-2 lg:px-0">
              We deliver end-to-end capabilities to ambitious brands. Over the
              years, we’ve entered a burgeoning space of deep tech where
              traditional methodologies have become obsolete. Through creative
              brand acceleration, we help businesses grow purposefully,
              sustainably, and profitably. Powered by creative and analytical
              ability, our interdisciplinary team delivers unearth results for
              new-age customers.
            </span>
            <span className="lg:ml-96 text-xl lg:text-2xl lg:font-medium lg:mt-10 lg:pr-10 px-2 lg:px-0">
              Whether it is about delivering business value or stimulating
              growth, unlock the power of creativity, innovation and technology
              with brave new shots. We are always at your disposal to deliver
              the results you need.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-purple-950 h-[80vh]"></div>
      <div className="flex border-x mx-2 border-black min-h-screen pb-20 border-b ">
        <div className="lg:ml-96 flex flex-col w-full p-5">
          <span className="my-20 text-2xl lg:text-5xl font-medium lg:pr-10 px-2 lg:px-0 w-full">
            Brands require new perspectives, capabilities and tools if they want
            to expedite their go-to-market strategy today.
          </span>
          <div className="grid lg:grid-cols-2 gap-y-12 gap-x-8 mt-14 border-black w-full pr-10">
            <div className="flex flex-col gap-y-1">
              <span className="border-t border-black pt-6 text-2xl lg:text-3xl pb-4 w-full">
                Brand Strategy
              </span>
              <span className="text-lg lg:text-xl">Brand Positioning</span>
              <span className="text-lg lg:text-xl">Brand Narrative</span>
              <span className="text-lg lg:text-xl">Integrated Marketing Planning</span>
              <span className="text-lg lg:text-xl">Brand Experiences</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="border-t border-black pt-6 text-2xl lg:text-3xl pb-4 w-full">
                Innovation
              </span>
              <span className="text-lg lg:text-xl">Brand Architecture</span>
              <span className="text-lg lg:text-xl">Brand Vibe</span>
              <span className="text-lg lg:text-xl">Business Design & Creation</span>
              <span className="text-lg lg:text-xl">Brand Redesign</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="border-t border-black pt-6 text-2xl lg:text-3xl pb-4 w-full">
                Content Strategy
              </span>
              <span className="text-lg lg:text-xl">Content Planning</span>
              <span className="text-lg lg:text-xl">Brand Tone + Voice + Story</span>
              <span className="text-lg lg:text-xl">Media Content</span>
              <span className="text-lg lg:text-xl">Thought Leadership</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="border-t border-black pt-6 text-2xl lg:text-3xl pb-4 w-full">
                Technology
              </span>
              <span className="text-lg lg:text-xl">Full Stack Mobile + Web </span>
              <span className="text-lg lg:text-xl">Web3 Development</span>
              <span className="text-lg lg:text-xl">IoT, Blockchain & AI</span>
              <span className="text-lg lg:text-xl">Python Automation</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="border-t border-black pt-6 text-2xl lg:text-3xl pb-4 w-full">
                Design
              </span>
              <span className="text-lg lg:text-xl">UX/UI design</span>
              <span className="text-lg lg:text-xl">Multimedia planning</span>
              <span className="text-lg lg:text-xl">Packaging</span>
              <span className="text-lg lg:text-xl">Visual Identity</span>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="border-t border-black pt-6 text-2xl lg:text-3xl pb-4 w-full">
                Social Media
              </span>
              <span className="text-lg lg:text-xl">Brand Positioning</span>
              <span className="text-lg lg:text-xl">Brand Narrative</span>
              <span className="text-lg lg:text-xl">Integrated Marketing Planning</span>
              <span className="text-lg lg:text-xl">Brand Experiences</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-x mx-2 border-black border-b ">
        <div className="flex flex-col my-20 lg:ml-96 p-5">
          <span className="mb-5 lg:mb-20 text-2xl lg:text-5xl font-medium lg:pr-10 lg:px-0 w-full"> Begin Your Journey to growth.</span>
          <button className="w-fit border border-black px-4 py-2 lg:text-xl hover:bg-black hover:text-white transition-all duration-500 hover:scale-105">Let&apos;s Talk</button>
        </div>
      </div>
    </section>
  );
}

export default page;
