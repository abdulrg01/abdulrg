import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "../public/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "../public/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "../public/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "../public/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "../public/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "../public/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "../public/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
