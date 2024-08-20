import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Nav({
  about,
  experience,
  project,
  contact,
  name,
  skills,
}: {
  about: Boolean;
  experience: Boolean;
  project: Boolean;
  contact: Boolean;
  skills: Boolean;
  name: Boolean;
}) {
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
              {skills && (
                <Link
                  href="/skills"
                  className="flex items-center gap-1 cursor-pointer duration-300 nav-link hover:text-gray-500 font-medium text-sm"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                  >
                    Skills
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
        </div>
      </nav>
    </header>
  );
}
