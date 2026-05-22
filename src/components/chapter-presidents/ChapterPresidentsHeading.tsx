import { nunitoFont } from "@/lib/font";
import React from "react";

export const ChapterPresidentsHeading: React.FC = () => (
  <section className="chapter-presidents-bg flex h-80 items-center justify-center py-5 lg:items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
    >
      CHAPTER PRESIDENTS (15TH REPUBLIC TILL DATE)
    </h1>
  </section>
);
