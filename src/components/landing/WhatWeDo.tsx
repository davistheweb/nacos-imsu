"use client";
import { NacosLogo } from "@/assets";
import { WhatWeDoList } from "@/data";
import { nunitoFont, rubikFont } from "@/lib/font";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const WhatWeDo: React.FC = () => (
  <section className="flex w-full flex-col items-center justify-center px-10 py-20">
    <div className="center-post-run-ani relative flex w-full flex-col items-center justify-center gap-4 py-5 md:max-w-150">
      <motion.h4
        className={`${nunitoFont.className} text-custom-green text-xl font-extrabold`}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "linear" }}
      >
        WHAT WE DO
      </motion.h4>
      <motion.h1
        className={`${nunitoFont.className} text-center text-xl font-extrabold md:text-4xl`}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "linear" }}
      >
        We Drive Innovation and Rapid Development among Computing Students
      </motion.h1>
    </div>

    <div className="grid grid-cols-1 gap-4 py-5 lg:grid-cols-3">
      <div className="flex flex-col gap-6 py-2">
        {WhatWeDoList.slice(0, 2).map(({ Icon, title, desc }) => (
          <motion.div
            key={title}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <div className="bg-custom-green flex h-15 w-15 items-center justify-center rounded-sm transition-all duration-500 hover:translate-x-5">
              <Icon
                className="text-white"
                fill="white"
                strokeWidth={0.1}
              />
            </div>
            <h1 className={`${nunitoFont.className} text-2xl font-bold`}>
              {title}
            </h1>
            <p className={`${rubikFont.className} text-[#6b6a75]`}>{desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="rounded-md border shadow-md">
        <Image
          src={NacosLogo}
          alt="nacos logo"
          draggable={false}
        />
      </div>
      <div className="flex flex-col gap-6 py-2">
        {WhatWeDoList.slice(2, 3).map(({ Icon, title, desc }) => (
          <motion.div
            key={title}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <div className="bg-custom-green flex h-15 w-15 items-center justify-center rounded-sm transition-all duration-500 hover:translate-x-5">
              <Icon
                fill="white"
                color="white"
                strokeWidth={0.1}
              />
            </div>
            <h1 className={`${nunitoFont.className} text-2xl font-bold`}>
              {title}
            </h1>
            <p className={`${rubikFont.className} text-[#6b6a75]`}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
