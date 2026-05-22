import { nunitoFont } from "@/lib/font";
import React from "react";

export const PastPatronsHeading: React.FC = () => (
  <section className="past-patrons-bg flex h-80 items-center justify-center py-5 lg:items-end">
    <h1
      className={`text-white ${nunitoFont.className} text-2xl font-extrabold md:text-5xl`}
    >
      PAST PRESIDENTS
    </h1>
  </section>
);
