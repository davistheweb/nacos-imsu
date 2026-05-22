import { nunitoFont } from "@/lib/font";
import React from "react";

export const ExecutivesPageHeading: React.FC = () => (
  <section className="executives-bg flex h-80 items-center justify-center py-5 lg:items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
      Executives Council
    </h1>
  </section>
);
