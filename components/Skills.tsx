import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Nav from "./Nav";
import { GoDotFill } from "react-icons/go";

export default function Skills() {
  return (
    <div className="w-screen">
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
        skills={false}
      />
      <div className="max-w-screen-lg px-4 py-10 mt-10 mx-auto w-full relative">
        <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          Skills
        </h3>
        <div className="mb-10 lg:mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-2 lg:text-left">
          <div className="group flex items-center justify-center flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Frontend Developer
            </h3>
            <div className="flex justify-between items-center gap-10">
              <div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      HTML
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      CSS
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      JAVASCRIPT
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      TAILWIND
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex items-center justify-center flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Backend Developer
            </h3>
            <div className="flex justify-between items-center gap-10">
              <div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      Mongodb
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      Express
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      My SQL
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
                <div>
                  <div className="flex mt-3 items-center gap-2">
                    <GoDotFill className="w-5 h-5" />
                    <h3
                      className={`mb-3 text-xl font-semibold mt-3 whitespace-nowrap`}
                    >
                      Node Js
                    </h3>
                  </div>
                  <p className={`m-0 text-start text-sm opacity-50`}>
                    Write me
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
