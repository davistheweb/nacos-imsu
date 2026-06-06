import { nunitoFont } from "@/lib/font";
import React from "react";

export const AboutAssociationHeading: React.FC = () => (
  <section className="about-association-bg flex h-100 items-center justify-center py-5 lg:items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
      About NACOS IMSU Chapter
    </h1>
  </section>
);
