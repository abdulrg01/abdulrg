import React from "react";
import Nav from "./Nav";
import { Spotlight } from "./ui/Spotlight";

export default function About() {
  return (
    <section className="min-h-screen">
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
        about={false}
        project={true}
        contact={true}
        name={false}
      />
      <div className="min-h-screen grid place-content-center">
        <div className="relative grid max-w-screen-lg px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:pt-20 mb-14">
          <div className="mr-auto place-self-center lg:col-span-5 border-gray-200 border-b border-r dark:border-gray-700 pr-5 pb-5">
            <div className="bg-gray-50 dark:bg-[#0E111A] pr-5">
              <img
                src="/port2.png"
                alt="profile picture"
                className="h-[330px] w-[280px]"
              />
            </div>
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About Me
            </h2>
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                My Introduction
              </h3>
              <p className="my-4">
                Transforming Concepts into Seamless User Experiences
              </p>
              <p className="my-4">
                Hi! I am Abdulrahman Abubakar, a passionate web developer with a
                keen eye for design and a drive for innovation. Through my
                diverse range of projects, I aim to showcase my creativity,
                technical proficiency, and dedication to delivering exceptional
                results.
              </p>
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center max-sm:text-center">
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  3+
                </h2>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Years of Experience
                </h3>
              </div>
              <div className="w-1 h-24 bg-gray-50 dark:bg-gray-800" />
              <div className="flex flex-col items-center justify-center max-sm:text-center">
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  6+
                </h2>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Projects Completed
                </h3>
              </div>
              <div className="w-1 h-24 bg-gray-50 dark:bg-gray-800" />
              <div className="flex flex-col items-center justify-center max-sm:text-center">
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  15+
                </h2>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Client
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid max-w-screen-lg w-full px-4 mx-auto lg:gap-5 xl:gap-10 lg:grid-cols-12 relative mb-7">
          <div className="mr-auto place-self-center lg:col-span-6 w-full">
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Html & CSS
                </h3>
                <p className="my-4">80%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[80%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Next.js
                </h3>
                <p className="my-4">90%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[80%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Next.js
                </h3>
                <p className="my-4">90%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[80%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tailwind & Shadcn
                </h3>
                <p className="my-4">90%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                {" "}
                <div className="bg-[#fff] h-2 w-[94%] rounded-full" />
              </div>
            </div>
          </div>
          <div className="mr-auto place-self-center lg:col-span-6 w-full">
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Javascript{" "}
                </h3>
                <p className="my-4">85%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[85%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Node JS
                </h3>
                <p className="my-4">70%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[80%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mongodb
                </h3>
                <p className="my-4">85%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[80%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Express
                </h3>
                <p className="my-4">80%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="bg-[#fff] h-2 w-[80%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
