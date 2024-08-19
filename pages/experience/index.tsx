import Experience from "@/components/Experience";
import React from "react";

export default function index() {
  return (
    <main className="relative !bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5s">
      <div className="max-w-7xl w-full">
        <Experience />
      </div>
    </main>
  );
}
