"use client";

import React from "react";
import { Heading } from "./Heading";
import WordRotate from "./animation/WordRotator";
import { Paragraph } from "./Paragraph";
import { Highlight } from "./Highlight";
import Link from "next/link";
import { Badge } from "./Badge";

export default function HeroText() {
  return (
    <div className="md:col-span-6 xl:col-span-6 mr-auto place-self-center">
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Abdul</Heading>
      <div className="flex items-center gap-5 my-5">
        <div className="h-1 w-28 bg-secondary" />
        <WordRotate
          className="text-sm tracking-wider font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary block"
          words={[
            "Web Developer",
            "Frontend Developer",
            "MERN Stack Developer",
          ]}
        />
      </div>
      <Paragraph className="max-w-xl mt-4">
        Developed and maintained <Highlight>user-facing features</Highlight>{" "}
        using modern frontend technologies.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a front-end developer with{" "}
        <Highlight>3+ years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Link
        className="my-10 flex items-center gap-3 cursor-pointer"
        href="/about"
      >
        <div className="h-11 w-6 bg-transparent rounded-3xl border-2 border-secondary flex items-center justify-center">
          <div className="w-1 h-2 bg-secondary rounded-full"></div>
        </div>
        <h2 className={`text-sm font-semibold text-secondary`}>
          About me{" "}
          <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
      <Badge
        href="https://firebasestorage.googleapis.com/v0/b/contactme-2970e.appspot.com/o/myresume.pdf?alt=media&token=c71c2a34-bf60-4338-85b2-9a08ac4df8a8"
        text="Resume"
      />
    </div>
  );
}
