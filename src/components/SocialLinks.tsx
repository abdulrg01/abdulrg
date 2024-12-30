"use client";
import React from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      name: "Twitter",
      href: "https://twitter.com/Taquiimam14",
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/taqui-imam",
      icon: <Linkedin />,
    },
    {
      name: "Github",
      href: "https://tinyurl.com/MdTaquiImam",
      icon: <Github />,
    },
  ];

  return (
    <div className="hidden group mr-auto place-self-center md:col-span-2 md:block">
      {links.map((item, i) => {
        const timing = 0.55 + i * 0.125;

        return (
          <FramerWrapper key={i} delay={timing} y={50} className="mb-3">
            <a href={item.href}>
              <button className="py-2.5 px-2 me-2 mb-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg bg-gray-200 dark:bg-neutral-800 border border-primary dark:border-gray-800 dark:hover:bg-gray-8border-gray-800 hover:bg-gray-800">
                {item.icon}
              </button>
            </a>
          </FramerWrapper>
        );
      })}
    </div>
  );
}
