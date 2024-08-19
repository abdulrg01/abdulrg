import React from "react";
import { testimonials } from "../data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards.tsx";
import Nav from "./Nav";
import { Spotlight } from "./ui/Spotlight";

const Clients = () => {
  return (
    <section>
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
        skills={true}
        testimonials={false}
        name={true}
      />
      <div id="testimonials" className="py-10">
        <h1 className="heading relative mb-5">
          Kind words from
          <span className="text-purple"> satisfied clients</span>
        </h1>

        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
