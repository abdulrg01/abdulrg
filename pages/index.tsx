import { FloatingNav } from "../components/ui/FloatingNav";
import RecentProject from "../components/RecentProject";
import { navItems } from "../data";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Process from "../components/Process";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
