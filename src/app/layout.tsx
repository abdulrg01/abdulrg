import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abdul rg - Developer",
  description:
    "Crafting intuitive web experiences | 💻 Front-End Developer | 🚀 HTML, CSS, JavaScript, React, Node, Express, | 🌍 Lifelong learner in the digital world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "bg-gray-100"
        )}
      >
        <Navbar />
        <div className="lg:pt-2 bg-gray-100">
          <div className="bg-white min-h-screen lg:rounded-xl border border-transparent lg:border-neutral-200">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
