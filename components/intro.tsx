"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[60rem] text-center pt-0 sm:mb-0 scroll-mt-40 h-screen"
      // className="relative w-full h-screen mx-auto"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/christian.png"
              alt="Christian portrait"
              width="192"
              height="192"
              quality="90"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="font-bold">Hi, I'm Christian.</span>
        <br className="sm:block hidden" />A junior developer with a design
        background.
        <br className="sm:block hidden" />I love building user interfaces and
        creating 3D visuals.{" "}
        <span className="text-lg">
          Scroll down to learn about my skills and experience.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none hover:bg-red-400 hover:text-gray-900 hover:-translate-y-1 focus:outline-none hover:drop-shadow-xl focus:2translate-y-2 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full hover:-translate-y-2 focus:outline-none hover:drop-shadow-xl focus:2translate-y-2 cursor-pointer border border-black/10 transition"
          href="/VC_CC_2023.pdf"
          download
        >
          Download CV
          <HiDownload />
        </a>
        <a
          className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full hover:-translate-y-2 focus:outline-none hover:drop-shadow-xl focus:2translate-y-2 cursor-pointer border border-black/10 transition"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full hover:-translate-y-2 focus:outline-none hover:drop-shadow-xl focus:2translate-y-2 cursor-pointer border borderBlack transition"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      <div className="w-[20px] h-[48px] content-center rounded-3xl border-2 border-secondary sm:mt-56 m-auto p-1">
        <motion.div
          animate={{
            y: [0, 28, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-2 h-2 rounded-full bg-slate-300 mb-1"
        />
      </div>
    </section>
  );
}
