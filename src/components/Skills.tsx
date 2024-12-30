import { Lightbulb } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Heading } from "./Heading";
import SkillsFooter from "./SkillsFooter";
import { Paragraph } from "./Paragraph";
import { framework, language } from "@/constants";

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-5 pt-10 pb-5">
        <span className="text-4xl -ml-3">
          <Lightbulb className="h-10 w-16" />
        </span>
        <Heading className="font-black">My Skills</Heading>
        <div className="flex flex-col gap-3">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">My Technical Experience/Skills.</h3>
          <FramerWrapper y={0} x={200}>
            <Paragraph>
              Currently i am a fresher and i have a solid understand of HTML5,
              CSS3, JS, TS and React, including responsive design principles. I
              specialize in building web applications and sites using
              Javascript, Typescript, React, Nextjs, Node, mongodb.
            </Paragraph>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block">
            <h3 className="text-base md:text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Programming Languages</h3>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <SkillsFooter items={language} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block" y={100} delay={0.32}>
            <h3 className="text-base md:text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Framework/Libraries and Version Control</h3>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <SkillsFooter items={framework} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
