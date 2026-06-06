import { nunitoFont } from "@/lib/font";
import React from "react";

export const ExecutivesPageHeading: React.FC = () => (
  <section className="executives-bg flex h-80 w-full flex-col items-center justify-center py-5 lg:h-100 lg:items-center">
    <h1
      className={`text-white ${nunitoFont.className} text-center text-2xl font-extrabold md:text-5xl`}
    >
      Executive Council
    </h1>
  </section>
);
