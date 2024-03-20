"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <p className="mb-3">
        Welcome to our world of digital empowerment, where innovation meets
        impact. At our core, we're a dynamic team of four passionate individuals
        with a combined experience of over 2 years in{" "}
        <span className="font-medium">blockchain development</span>,{" "}
        <span className="font-medium">full-stack engineering</span>,{" "}
        <span className="font-medium">app development</span>, and{" "}
        <span className="font-medium">marketing</span>. We thrive on turning
        possibilities into realities, leveraging the boundless potential of
        social media to propel brands to new heights. With a meticulous focus on
        growth and a relentless pursuit of excellence, we craft tailored
        solutions that resonate with audiences and drive tangible results. Join
        us on this exhilarating journey as we unlock the true power of digital
        innovation, transforming brands and shaping the future of the digital
        landscape.
      </p>
    </motion.section>
  );
}
