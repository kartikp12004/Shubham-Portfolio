"use client";
import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import { motion } from "motion/react";
import { fadeInRight, fadeInUp } from "../data/variants";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

const AboutMe = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      className="bg-neutral-950 flex flex-col  items-center text-neutral-50 px-4 lg:px-6 py-16"
    >
      <motion.h4
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        className="text-[15px] text-center text-neutral-300 font-medium"
      >
        GET TO KNOW ME
      </motion.h4>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-50"
      >
        About Me
      </motion.h2>
      <div className="flex max-lg:flex-col max-w-4xl ">
        <PersonalInfo />
        <motion.div className="lg:w-2/3 p-2 lg:p-6 space-y-4 lg:border-l lg:border-neutral-600">
          <Education />
          <Experience />
          <Skills />
        </motion.div>
      </div>
    </motion.section>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
