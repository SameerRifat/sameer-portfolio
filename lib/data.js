import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

// import echoCartPoster from "@/public/echoCartPoster.png"
import echoCartPoster from "../assets/projects/echoCartPoster.png"
import echoCartBanner from "@/public/echoCartBanner.png"
// import echoCart from "@/public/echoCart.mp4";
import goTrollyPoster from "../assets/projects/goTrollyPoster.png"
import goTrollyBanner from "../assets/projects/goTrollyBanner.png"
// import goTrolly from "@/public/goTrolly.mp4";
import ecommPoster from "../assets/projects/ecommPoster.png"
import ecommBanner from "../assets/projects/ecommBanner.png"
// import ecom from "@/public/ecom.mp4";
import eduPoster from "../assets/projects/eduPoster.png"
import eduBanner from "../assets/projects/eduBanner.png"
// import edu from "@/public/edu.mp4";
import restPoster from "../assets/projects/restPoster.png"
import restBanner from "../assets/projects/restBanner.png"
// import res from "@/public/res.mp4";
import staticEcomPoster from "../assets/projects/staticEcomPoster.png"
import staticEcomBanner from "../assets/projects/staticEcomBanner.png"
// import staticEcom from "@/public/staticEcom.mp4";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ];

export const projectsData = [
  {
    title: "Admin Dashboard",
    description: "Static admin dashboard with light and dark mode.",
    // description: "Explore this static admin dashboard that includes features for analytics, product management, order management, and user management.",
    tags: ["React", "Material-UI", "Redux Toolkit", "CSS"],
    imageUrl: echoCartPoster,
    // videoUrl: echoCart,
    bannerUrl: echoCartBanner,
    url: "https://echocart.onrender.com/"
  },
  {
    title: "GoTrolly Website",
    description: "A full-stack e-commerce platform.",
    // description: "A full-stack e-commerce platform built with the MERN stack, offering seamless product browsing, shopping cart functionality, and secure checkout.",
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Multer", "Stripe API"],
    imageUrl: goTrollyPoster,
    // videoUrl: goTrolly,
    bannerUrl: goTrollyBanner,
    url: "https://gotrolly-app.onrender.com/"
  },  
  {
    title: "E-Commerce Website",
    description: "A modern full-stack E-commerce platform ",    
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Multer", "Stripe API"],
    // description: "A modern E-commerce platform offering a seamless shopping experience with secure transactions and a user-friendly interface.",    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Multer", "Stripe API"],
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Multer", "Stripe API"],
    imageUrl: ecommPoster,
    // videoUrl: ecom,
    bannerUrl: ecommBanner,
    url: "https://mern-ecommerce-frontend-29rv.onrender.com/"
  },
  {
    title: "Educational Website",
    description: "An engaging and interactive UI/UX using React.js for an enriching educational experience.",    tags: ["HTML", "CSS", "React.js", "Styled-Components"],
    // description: "Crafted an engaging and interactive UI/UX using React.js for an enriching educational experience.",    tags: ["HTML", "CSS", "React.js", "Styled-Components"],
    tags: ["HTML", "CSS", "React.js", "Styled-components"],
    imageUrl: eduPoster,
    // videoUrl: edu,
    bannerUrl: eduBanner,
    url: "https://education4u.netlify.app/"
  },
  {
    title: "Restaurant Website",
    description: "Crafted a responsive website with a modern design for an enhanced dining experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: restPoster,
    // videoUrl: res,
    bannerUrl: restBanner,
    url: "https://restaurant-website-s.netlify.app/"
  },
  {
    title: "E-Commerce Website",
    description: "Developed a static e-commerce site featuring a diverse range of products.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: staticEcomPoster,
    imageUrl: staticEcomPoster,
    // videoUrl:  staticEcom,
    bannerUrl: staticEcomBanner,
    url: "https://static-red-store-shop.netlify.app/"
  }
];

export const skillsData = [
  { name: "HTML", level: 95},
  { name: "CSS", level: 90},
  { name: "JavaScript", level: 85},
  { name: "TypeScript", level: 60},
  { name: "React", level: 90},
  { name: "Next.js", level: 80},
  { name: "Node.js", level: 85},
  { name: "Git", level: 95},
  { name: "Tailwind", level: 95},
  { name: "Prisma", level: 70},
  { name: "MongoDB", level: 80},
  { name: "Redux", level: 90},
  { name: "GraphQL", level: 60},
  { name: "Express", level: 80},
  { name: "PostgreSQL", level: 60},
  { name: "Framer Motion", level: 70},
];