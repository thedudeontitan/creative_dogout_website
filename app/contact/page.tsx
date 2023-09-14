import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row border-x mx-2 min-h-screen border-black pr-10">
        <form className="lg:ml-20 flex flex-col gap-5 lg:mt-60 items-start">
          <input
            className="p-2 border bg-slate-100"
            type="text"
            placeholder="Name"
            required={true}
          />
          <input
            className="p-2 border bg-slate-100"
            type="text"
            placeholder="Company"
            required={true}
          />
          <input
            className="p-2 border bg-slate-100"
            type="text"
            placeholder="Email"
            required={true}
          />
          <input
            className="p-2 border bg-slate-100"
            type="text"
            placeholder="Message"
            required={true}
          />
          <label className="flex items-center gap-2">
            <input
              className="whitespace-break-spaces"
              type="checkbox"
              required={true}
            />
            By submitting the form, you agree to our Privacy Policy and Terms &
            Conditions.
          </label>
          <input className="border border-black px-4 py-2" type="submit" />
        </form>
        <div className=" lg:border-r border-black lg:mt-20 lg:mb-20 lg:ml-auto" />
        <div className="flex flex-col mt-60 lg:mr-auto lg:ml-20">
          <span className="text-xl font-medium">Seeking a quick response?</span>
          <span className="text-lg mt-5">Write to us:</span>
          <span className="text-lg mt-3">Tanya Manocha</span>
          <span className="text-lg">Founder - Creative Dugout</span>
          <Link type="" href="mailto:@creativedugout.com" className="text-lg">
            tanya@creativedugout.com
          </Link>
          <span className="text-lg mt-5">
            Address: Building no. 90, Sector-44
          </span>
          <span className="text-lg">Gurugram, Haryana - 122003</span>
        </div>
      </div>
      <div className="bg-purple-950 h-[80vh]"></div>
    </section>
  );
}

export default page;

// dp and tree, dp on .. , learn how to explain problems, how to create edge cases,
