import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import HeroImg from "@/components/HeroImg";
import HeroText from "@/components/HeroText";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import SocialLinks from "@/components/SocialLinks";
import { TechStack } from "@/components/TechStack";

// export default function Home() {
//   return (
//     <main>
//       <section className="max-w-screen-lg mx-auto w-full grid md:grid-cols-12 md:gap-8 md:pb-28 pb-16 pt-28 px-4 md:px-10 hero">
//         <SocialLinks />
//         <HeroText />
//         <HeroImg />
//       </section>

//       <section className="max-w-screen-xl mx-auto w-full bg-white mt-14 rounded-xl project relative z-50 px-3 md:px-10">
//         <div className="p-10 rounded-xl bg-gradient-to-b from-gray-50 to-gray-50 dark:from-gray-900">
//           <Products />
//           <TechStack />
//         </div>
//       </section>
//     </main>
//   );
// }

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Abdulrahman rg
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Mern stack developer with{" "}
        <Highlight>3+ years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Front-end developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
