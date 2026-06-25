"use client";
import { nunitoFont, rubikFont } from "@/lib/font";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const ChapterPresidentsCard: React.FC<TChapterPresidentsListProps> = ({
  name,
  timeline,
  image,
}) => (
  <div className="scaleIn group/scale px-6">
    <div className="bg-[#eef9ff]">
      <div className="flex flex-col gap-3">
        <div className="h-87.5 overflow-hidden">
          <Image
            src={image}
            alt="avatar"
            className="-z-10 object-cover transition-all duration-300 ease-in group-hover/scale:scale-105"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
          <motion.h1
            className={`text-custom-green text-center text-xl font-semibold ${nunitoFont.className}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
          >
            {name}
          </motion.h1>
          <motion.p
            className={`${rubikFont.className} text-center text-[#6b6a75]`}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            {timeline}
          </motion.p>
        </div>
      </div>
    </div>
  </div>
);
