import React from "react";
import Nav from "./Nav";
import { Spotlight } from "./ui/Spotlight";
import { CgWebsite } from "react-icons/cg";
import { PiRocketLaunch } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { MdApps } from "react-icons/md";

const Experience = () => {
  return (
    <div>
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
        experience={false}
        about={true}
        project={true}
        contact={true}
        skills={true}
        testimonials={true}
        name={true}
      />
      <div className="max-w-screen-lg px-4 py-10 mt-10 mx-auto w-full relative">
        <h1 className="heading">
          My <span className="text-purple">work experience</span>
        </h1>
        <div className="mb-10 lg:mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <CgWebsite className="w-5 h-5" />
            <h2
              className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
            >
              Frontend Developer
            </h2>
            <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </div>

          <div className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <PiRocketLaunch className="w-5 h-5" />
            <h2 className={`mb-3 text-2xl font-semibold mt-3`}>Freelancing</h2>
            <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </div>

          <div className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <GrTechnology className="w-5 h-5" />
            <h2
              className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
            >
              Frontend Intern
            </h2>
            <p className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </div>

          <div className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <MdApps className="w-5 h-5" />
            <h2
              className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
            >
              Web Development
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-start text-sm opacity-50 text-balance`}
            >
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
