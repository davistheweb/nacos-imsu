import { nunitoFont } from "@/lib/font";
import React from "react";

export const AboutAssociationHeading: React.FC = () => (
  <section className="about-association-bg flex h-80 items-end justify-center py-5">
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
      About NACOS IMSU Chapter
    </h1>
  </section>
);
