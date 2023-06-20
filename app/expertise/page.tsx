import React from "react";
import { BsArrowRight } from "react-icons/bs";

function page() {
  return (
    <section className="bg-white">
      <div className="flex flex-col border-x mx-2 border-black min-h-screen ">
        <div className="mx-auto flex flex-col h-screen  w-full">
          <div className="flex flex-col lg:mt-60">
            <span className="lg:ml-96 mt-20 text-5xl font-medium lg:pr-10 px-2 lg:px-0">
              Building progressive brands
            </span>
            <div className=" border-b border-black lg:mt-6 lg:mb-20" />
            <span className="lg:ml-96 text-2xl font-medium lg:pr-10 px-2 lg:px-0">
              We deliver end-to-end capabilities to ambitious brands. Over the
              years, we’ve entered a burgeoning space of deep tech where
              traditional methodologies have become obsolete. Through creative
              brand acceleration, we help businesses grow purposefully,
              sustainably, and profitably. Powered by creative and analytical
              ability, our interdisciplinary team delivers unearth results for
              new-age customers.
            </span>
            <span className="lg:ml-96 text-2xl font-medium lg:mt-10 lg:pr-10 px-2 lg:px-0">
              Whether it is about delivering business value or stimulating
              growth, unlock the power of creativity, innovation and technology
              with brave new shots. We are always at your disposal to deliver
              the results you need.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-purple-950 h-[80vh]"></div>

    </section>
  );
}

export default page;
