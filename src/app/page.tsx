import HeroImg from "@/components/HeroImg";
import HeroText from "@/components/HeroText";
import { Products } from "@/components/Products";
import SocialLinks from "@/components/SocialLinks";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <section className="max-w-screen-lg mx-auto w-full grid md:grid-cols-12 md:gap-8 md:pb-28 pb-16 pt-28 px-4 md:px-10 hero">
        <SocialLinks />
        <HeroText />
        <HeroImg />
      </section>

      <section className="max-w-screen-xl mx-auto w-full bg-white mt-14 rounded-xl project relative z-50 px-3 md:px-10">
        <div className="p-10 rounded-xl bg-gradient-to-b from-gray-50 to-gray-50 dark:from-gray-900">
          <Products />
          <TechStack />
        </div>
      </section>
    </main>
  );
}
