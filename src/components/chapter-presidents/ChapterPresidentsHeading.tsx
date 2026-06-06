import { nunitoFont } from "@/lib/font";
import React from "react";

export const ChapterPresidentsHeading: React.FC = () => (
  <section className="chapter-presidents-bg flex h-80 w-full flex-col items-center justify-center py-5 lg:h-100 lg:items-center">
    <h1
      className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
    >
      Chapter Presidents (15th Republic Till Date)
    </h1>
  </section>
);
