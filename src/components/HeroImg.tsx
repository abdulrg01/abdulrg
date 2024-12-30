"use client";
import React from "react";
import FramerWrapper from "./animation/FramerWrapper";
import Image from "next/image";
import profile from "../public/profileImg.png";

export default function HeroImg() {
  return (
    <FramerWrapper
      className="hidden md:mt-14 md:col-span-4 md:block"
      y={0}
      x={100}
    >
      <Image
        className="rounded-full"
        src={profile}
        alt="profile"
        width={300}
        height={100}
        priority
      />
    </FramerWrapper>
  );
}
