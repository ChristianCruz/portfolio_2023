"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { services } from "@/components";
import Image from "next/image";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: any;
}) => {
  return (
    <motion.div className="w-full red-gradient p-[1px] rounded-[0px] shadow-card">
      <div className="bg-white rounded-[0px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt={title}
          className="w-22 h-22 py-6 px-6  bg-tertiary rounded-full object-contain"
        />
        <h3 className="text-black font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <>
      <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'm a self-taught junior React developer with a background in Graphic
          Design. <br className="sm:block hidden" />
          My experience is a mix of UI/UX for enterprise software, Art Direction
          and Marketing for agencies and startups. I can design solutions
          aligned to business goals from a holistic point of view and
          collaborate with different teams and stakeholders.
        </motion.p>
      </motion.section>
      <div className="mt-20 flex flex-nowrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}
