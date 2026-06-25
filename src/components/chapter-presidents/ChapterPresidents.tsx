"use client";
import { ChapterPresidentsList } from "@/data";
import { motion } from "framer-motion";
import React from "react";
import { ChapterPresidentsCard } from "./ChapterPresidentsCard";

export const ChapterPresidents: React.FC = () => (
  <section className="flex items-center justify-center px-4 py-20 md:px-10">
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      {ChapterPresidentsList.map(({ name, timeline, image }) => (
        <ChapterPresidentsCard
          key={name}
          name={name}
          timeline={timeline}
          image={image}
        />
      ))}
    </motion.div>
  </section>
);
