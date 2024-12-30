import { Container } from "@/components/Container";
import { Metadata } from "next";

import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills | Abdul rg",
  description:
    "Crafting intuitive web experiences | 💻 Front-End Developer | 🚀 HTML, CSS, JavaScript, React, Node, Express, | 🌍 Lifelong learner in the digital world",
};

export default function SkillsPage() {
  return (
    <Container>
      <Skills />
    </Container>
  );
}
