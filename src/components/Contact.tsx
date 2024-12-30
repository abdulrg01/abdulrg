"use client";
import React from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { footerLinks } from "@/constants";

const Contact = () => {
  const Role = {
    Email: "Email",
  };
  return (
    <section>
      <div className="flex flex-col items-center pt-14">
        <div>
          <div className="mb-10 grid w-full lg:grid-cols-4 grid-cols-2 gap-5 lg:text-left">
            {footerLinks.map((item, i) => {
              const timing = 0.55 + i * 0.125;
              return (
                <FramerWrapper key={i} delay={timing} y={50}>
                  <a
                    href={
                      item.title === Role.Email
                        ? "mailto:abdulrg01@gmail.com"
                        : item.href
                    }
                    target="_blank"
                    className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <h2 className="text-base md:text-xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary py-3 whitespace-nowrap">
                      {item.title}
                    </h2>
                    <p
                      className={`m-0 max-w-[30ch] text-start text-sm opacity-50`}
                    >
                      {item.name}
                    </p>
                    <p className="m-0 max-w-[30ch] mt-2 text-start text-sm opacity-50">
                      {item.desc}{" "}
                      <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </p>
                  </a>
                </FramerWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
