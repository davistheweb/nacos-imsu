import { nunitoFont } from "@/lib/font";
import React from "react";

export const ExecutivesPageHeading: React.FC = () => (
  <section className="executives-bg flex h-50 justify-center pb-2 items-center">
    <h1
      className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
    >
      Executive Council
    </h1>
  </section>
);
