import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { CgViewComfortable } from "react-icons/cg";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Spotlight } from "./ui/Spotlight";
import Nav from "./Nav";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className={`${inter.className}`}>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <Nav
        about={false}
        experience={false}
        project={false}
        contact={false}
        skills={false}
        testimonials={false}
        name={true}
      />
      <div className="relative grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-8 lg:pt-14 lg:grid-cols-12">
        <div className="hidden group mr-auto place-self-center lg:col-span-2 lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-full border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3"
          >
            <BsTwitterX className="w-5 h-5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-full border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3"
          >
            <BsLinkedin className="w-5 h-5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-full border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <BsGithub className="w-5 h-5" />
          </motion.div>
        </div>
        <div className="mr-auto place-self-center lg:col-span-6">
          <motion.h2
            className={`mb-10 text-2xl font-semibold whitespace-nowrap`}
          >
            Abdulrahman Abubakar{" "}
            <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
              👋
            </span>
          </motion.h2>
          <div className="flex items-center gap-5 mb-10">
            <div className="h-1 w-24 bg-[#A093E1]" />
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={`text-sm tracking-wider font-semibold whitespace-nowrap`}
            >
              Frontend Developer
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mb-8 w-full text-sm opacity-50 my-3 max-w-[50ch]`}
          >
            Developed and maintained user-facing features using modern frontend
            technologies.
            <br />
            Assisted in the development of a web-based platform using React.js,
            enhancing interactivity.
          </motion.p>
          <Link
            className="mb-10 flex items-center gap-3 cursor-pointer"
            href="/about"
          >
            <div className="h-11 w-6 bg-transparent rounded-3xl border-2 border-[#A093E1] flex items-center justify-center">
              <div className="w-1 h-2 bg-[#A093E1] rounded-full"></div>
            </div>
            <h2 className={`text-sm font-semibold`}>
              About me{" "}
              <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-9"
            href="https://firebasestorage.googleapis.com/v0/b/contactme-2970e.appspot.com/o/myresume.pdf?alt=media&token=c71c2a34-bf60-4338-85b2-9a08ac4df8a8"
            target="_blank"
          >
            <MagicButton
              title="Resume"
              icon={<CgViewComfortable />}
              position="right"
            />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:mt-0 lg:col-span-4 lg:flex"
        >
          <div className="relative max-md:mt-10 hidden md:flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
            <Image
              className="relative rounded-full"
              src="/profileImg.png"
              alt="profile"
              width={300}
              height={100}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
