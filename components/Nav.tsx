import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Nav({
  about,
  experience,
  project,
  contact,
  name,
}: {
  about: Boolean;
  experience: Boolean;
  project: Boolean;
  contact: Boolean;
  name: Boolean;
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`${inter.className}`}>
      <nav className={`max-w-screen-lg px-4 mx-auto py-5`}>
        <div className="flex flex-wrap justify-between items-center font-mono text-sm">
          <div className="flex justify-start">
            {name && (
              <Link href="/">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="self-center whitespace-nowrap flex justify-center bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-700 dark:from-inherit rounded-xl border bg-gray-200 dark:bg-zinc-800/30"
                >
                  Abu&nbsp;
                  <code className="font-mono font-bold">siyama</code>
                </motion.p>
              </Link>
            )}
          </div>
          <div className="hidden md:inline-flex items-center gap-7 relative">
            <ul className="flex text-[13px] gap-7">
              {about && (
                <Link
                  href="/about"
                  className="flex items-center gap-1 cursor-pointer duration-300 nav-link hover:text-gray-500 font-medium text-sm"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                  >
                    About
                  </motion.li>
                </Link>
              )}
              {project && (
                <Link
                  href="/projects"
                  className="flex items-center gap-1 cursor-pointer duration-300 nav-link hover:text-gray-500 font-medium text-sm"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                  >
                    Project
                  </motion.li>
                </Link>
              )}
              {experience && (
                <Link
                  href="/experience"
                  className="flex items-center gap-1 cursor-pointer duration-300 nav-link hover:text-gray-500 font-medium text-sm"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                  >
                    Experience
                  </motion.li>
                </Link>
              )}
              {contact && (
                <Link
                  href="/contact"
                  className="flex items-center gap-1 cursor-pointer duration-300 nav-link hover:text-gray-500 font-medium text-sm"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                  >
                    Contact
                  </motion.li>
                </Link>
              )}
            </ul>
          </div>

          {/* mobile view */}
          <div
            className={`${
              toggle
                ? "hidden"
                : "inline-block cursor-pointer md:hidden p-5 text-black dark:text-white"
            } relative`}
            onClick={() => setToggle(true)}
          >
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="justify-between items-center w-full lg:hidden p-5 relative"
            >
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                onClick={() => setToggle(false)}
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <ul className="flex flex-col mt-4 font-medium lg:hidden lg:mt-0">
                {["about", "experience", "projects", "contact"].map((item) => (
                  <li
                    key={item}
                    className="block py-2 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white uppercase"
                  >
                    <Link href={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
