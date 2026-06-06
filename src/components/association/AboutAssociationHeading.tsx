import { nunitoFont } from "@/lib/font";
import React from "react";

export const AboutAssociationHeading: React.FC = () => (
  <section className="about-association-bg flex h-70 w-full flex-col items-center justify-center py-5 lg:h-100 lg:items-center">
    <div>
      {" "}
      <h1
        className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
      >
        About
      </h1>
      <h1
        className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
      >
        NACOS IMSU Chapter
      </h1>
    </div>
  </section>
);
