import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abdul rg",
  description:
    "Abdul rg is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

// export default function Projects() {
//   return (
//     <section className="max-w-screen-xl mx-auto w-full">
//       <div className="pt-20 pb-5 px-4 md:px-28 hero">
//         <span className="text-4xl">⚡</span>
//         <Heading className="font-black mb-10">
//           {" "}
//           What I&apos;ve been working on
//         </Heading>
//       </div>

//       <section className="bg-white rounded-xl project relative z-50 px-3 md:px-20">
//         <div className="p-10 rounded-xl bg-gradient-to-b from-gray-50 to-gray-50 dark:from-gray-900">
//           <Products />
//           <TechStack />
//         </div>
//       </section>
//     </section>
//   );
// }

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
