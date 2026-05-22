import { nunitoFont } from "@/lib/font";
import React from "react";

export const ExecutivesPageHeading: React.FC = () => (
  <section className="executives-bg flex h-70 items-center justify-center py-3 lg:items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
      Executive Council
    </h1>
  </section>
);
