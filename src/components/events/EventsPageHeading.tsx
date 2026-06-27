"use client";
import { nunitoFont } from "@/lib/font";
import { motion } from "framer-motion";
import React from "react";

export const EventsPageHeading: React.FC = () => (
  <section className="executives-bg flex h-80 w-full flex-col items-center justify-center py-5 lg:h-100 lg:items-center">
    <motion.h1
      className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      Events
    </motion.h1>
  </section>
);
