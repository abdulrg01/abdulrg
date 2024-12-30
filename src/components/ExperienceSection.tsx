import React from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { experience } from "@/constants";

export default function ExperienceSection() {
  return (
    <div className="flex items-center justify-between">
      {experience.map((list, i) => {
        const timing = 0.55 + i * 0.125;

        return (
          <>
            <FramerWrapper
              delay={timing}
              y={50}
              className="flex flex-col items-center justify-center max-sm:text-center"
              key={i}
            >
              <Heading as="h3">{list.num}+</Heading>
              <Paragraph className="whitespace-nowrap">{list.desc}</Paragraph>
            </FramerWrapper>

            {i < experience.length - 1 && (
              <div className="w-1 h-24 bg-secondary" />
            )}
          </>
        );
      })}
    </div>
  );
}
