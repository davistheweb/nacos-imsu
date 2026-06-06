import { nunitoFont } from "@/lib/font";
import React from "react";

export const ChapterPresidentsHeading: React.FC = () => (
  <section className="chapter-presidents-bg flex h-50 justify-center pb-2 items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
    >
      Chapter Presidents (15th Republic Till Date)
    </h1>
  </section>
);
