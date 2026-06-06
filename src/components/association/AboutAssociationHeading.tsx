import { nunitoFont } from "@/lib/font";
import React from "react";

export const AboutAssociationHeading: React.FC = () => (
  <section className="about-association-bg flex flex-col gap-1 h-75 items-center justify-center pt-10 py-5 lg:items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
   
      About
    </h1>
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
      NACOS IMSU Chapter
    </h1>
  </section>
);
