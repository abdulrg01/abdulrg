"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import portImg from "@/public/port2.png";

import { motion } from "framer-motion";
import FramerWrapper from "./animation/FramerWrapper";
import { Heading } from "./Heading";
import ExperienceSection from "./ExperienceSection";

export default function About() {
  return (
    <div>
      <div className="grid gap-16 lg:grid-cols-12 pt-14">
        <FramerWrapper
          y={0}
          x={-100}
          className="mr-auto place-self-center lg:col-span-5 border-gray-200 border-b border-r dark:border-gray-700 pr-5 pb-5"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 3,
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="bg-gray-50 dark:bg-[#0E111A] pr-5 mb-3"
          >
            <Image
              src={portImg}
              alt="profile picture"
              width={300}
              height={300}
              className="rounded-md pt-5"
            />
          </motion.div>
        </FramerWrapper>
        <FramerWrapper
          y={0}
          x={100}
          className="mr-auto place-self-center lg:col-span-7 mb-3"
        >
          <span className="text-4xl">💬</span>
          <Heading className="font-black">About Me</Heading>
          <blockquote className="mx-auto my-6 max-w-2xl">
            <Paragraph>
              Transforming Concepts into Seamless User Experiences
            </Paragraph>
            <Paragraph>
              Hey there, I&apos;m Abdulrahman Abubakar - a passionate developer,
              Welcome to my corner of the digital world!
            </Paragraph>
          </blockquote>

          <ExperienceSection />
        </FramerWrapper>
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-10">
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional digital experiences. As a developer, I
          thrive on turning lines of code into functional and elegant solutions.
          My goal is to not just create software, but to build digital marvels
          that seamlessly merge form and function.
        </Paragraph>

        <Paragraph className=" mt-4">
          But my journey doesn&apos;t stop at coding. With a heart full of words
          and a mind brimming with ideas, I&apos;ve ventured into the realm of
          writing. From tech articles that unravel complex concepts to creative
          tales that ignite the imagination, I weave words to inform, entertain,
          and inspire.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering appreciation for design. I believe
          that aesthetics and usability go hand in hand. My eye for awesome
          design ensures that every project I undertake not only works
          flawlessly under the hood but also looks stunning on the surface.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my insights, experiences, and
          creations with you. Whether you&apos;re a fellow developer seeking
          solutions, a fellow writer in search of inspiration, or simply someone
          who appreciates the finer aspects of design, there&apos;s something
          here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this journey of bytes and narratives, logic and creativity,
          code and prose. Together, we can explore the boundless possibilities
          of technology and storytelling, all while reveling in the sheer beauty
          of thoughtful design.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
