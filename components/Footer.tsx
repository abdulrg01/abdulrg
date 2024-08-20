import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../data";
import Nav from "./Nav";
import { Spotlight } from "./ui/Spotlight";
import { GrTechnology } from "react-icons/gr";
import { MdApps, MdEmail } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <Nav
        experience={true}
        about={true}
        project={true}
        contact={true}
        name={true}
        skills={true}
      />
      <div className="w-full pb-10 pt-20 max-w-screen-lg mx-auto px-4 py-10 mb-4 md:mb-4 relative">
        {/* background grid */}
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          <div className="w-full">
            <div className="mb-10 lg:mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <a
                href="abdulrg01@gmail.com"
                target="_blank"
                className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <MdEmail className="w-5 h-5" />
                <h2
                  className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                >
                  Email
                </h2>
                <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
                  abdulrg01@gmail.com
                </p>
                <p
                  className={`m-0 max-w-[30ch] mt-2 text-start text-sm opacity-50`}
                >
                  Write me{" "}
                  <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </p>
              </a>

              <a
                className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                href="https://www.linkedin.com/in/abdulrahman-abubakar-b464a72a1"
                target="_blank"
              >
                <LiaLinkedin className="w-5 h-5" />
                <h2
                  className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                >
                  Linkedin
                </h2>
                <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
                  Linkedin profile
                </p>
                <p
                  className={`m-0 max-w-[30ch] mt-2 text-start text-sm opacity-50`}
                >
                  Write me{" "}
                  <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </p>
              </a>

              <a
                href="https://twitter.com/Abdulra01025525"
                target="_blank"
                className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <BsTwitterX className="w-5 h-5" />
                <h2
                  className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                >
                  Twitter
                </h2>
                <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
                  Twitter formerly name X
                </p>
                <p
                  className={`m-0 max-w-[30ch] mt-2 text-start text-sm opacity-50`}
                >
                  Write me{" "}
                  <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </p>
              </a>

              <div className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <BsWhatsapp className="w-5 h-5" />
                <h2
                  className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                >
                  Whatsapp
                </h2>
                <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
                  +2348063610782
                </p>
                <p
                  className={`m-0 max-w-[30ch] mt-2 text-start text-sm opacity-50`}
                >
                  Write me{" "}
                  <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </p>
              </div>
            </div>
          </div>

          <a href="abdulrg01@gmail.com" target="_blank">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Abusiyama
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
                href={info.link}
                key={info.id}
                target="_blank"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
