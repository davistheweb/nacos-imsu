"use client";
import { ExecutivesCouncilList } from "@/data";
import { nunitoFont } from "@/lib/font";
import { motion } from "framer-motion";
import React from "react";
import { ExecutivesListCard } from "./ExecutivesListCard";

export const ExecutivesList: React.FC = () => (
  <section className="flex flex-col items-center justify-center px-4 py-20 md:px-10">
    <div className="center-post-run-ani relative flex flex-col items-center justify-center gap-2 py-4">
      <motion.h1
        className="text-custom-green text-2xl font-semibold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        Meet the Team
      </motion.h1>
      <motion.h1
        className={`${nunitoFont.className} text-center text-2xl font-extrabold md:text-4xl`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        21st Republic Executive Council
      </motion.h1>
    </div>
    <motion.div
      className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      {ExecutivesCouncilList.map(({ name, position, image }) => (
        <ExecutivesListCard
          key={name}
          name={name}
          position={position}
          image={image}
        />
      ))}
    </motion.div>
  </section>
);
