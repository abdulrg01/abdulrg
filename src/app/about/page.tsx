import { Container } from "@/components/Container";
import { Metadata } from "next";

import About from "@/components/About";
import { Heading } from "@/components/Heading";

export const metadata: Metadata = {
  title: "About | Abdul rg",
  description:
    "Crafting intuitive web experiences | 💻 Front-End Developer | 🚀 HTML, CSS, JavaScript, React, Node, Express, | 🌍 Lifelong learner in the digital world",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
