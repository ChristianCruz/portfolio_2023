import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaPenRuler,
  FaPalette,
  FaGlasses,
  FaFaceGrinWide,
} from "react-icons/fa6";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Marketing Designer",
    location: "Stakefish",
    description:
      "I was responsible for assisting in the development of visual assets for internal and external campaigns, social media, and events related to the blockchain environment. Including newsletter, IG and Linkedin branding, visuals for blog posts, promotional items, among other needs.",
    icon: React.createElement(FaPalette),
    date: "August 2021 - January 2023",
  },
  {
    title: "UI/UX Designer",
    location: "CBRE",
    description:
      "I worked on a contract project to redesign a responsive desktop application and set up the direction of future features with user testing, wireframes, workflow diagrams and high-fidelity mockups.",
    icon: React.createElement(FaPenRuler),
    date: "October 2019 - July 2020",
  },
  {
    title: "Technical Expert",
    location: "Thinkful",
    description:
      "As part of Thinkful’s mentoring team I was responsible for coaching several students of the Design track on principles of design, user centered design processes, and front-end development skills.",
    icon: React.createElement(FaGlasses),
    date: "January 2019 - January 2020",
  },
  {
    title: "UI/UX Lead",
    location: "Copart",
    description:
      "As the first designer to be part of the IT team, I introduced them to Design Driven Development and established a design system to build consistent applications. I was also in charge of designing collaterals including wireframes, UI elements and prototypes. Learned and practiced Scrum and Agile methodologies.",
    icon: React.createElement(FaPenRuler),
    date: "January 2017 - September 2019",
  },
  {
    title: "Senior Art Director",
    location: "Arswells",
    description:
      "Juggled multiple projects for both print and digital jobs including branding, web design, and editorial.",
    icon: React.createElement(FaPalette),
    date: "October 2015 - December 2016",
  },
  {
    title: "Digital Art Director",
    location: "Dieste",
    description:
      "Responsible for defining the brand as well as building the user experience and interface of the product through research, user flows, wireframes and other assets. I also Assisted with the front-end development of the consumer facing website.",
    icon: React.createElement(FaPalette),
    date: "April 2014 - September 2015",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    source_code_link: "https://github.com/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    source_code_link: "https://github.com/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    source_code_link: "https://github.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Bootstrap",
  "Framer Motion",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
  "Blender",
  "Figma",
  "Jira",
  "Basecamp",
  "Notion",
] as const;
