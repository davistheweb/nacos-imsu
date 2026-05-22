import { ExecutivesCouncilList } from "@/data";
import { nunitoFont } from "@/lib/font";
import React from "react";
import { ExecutivesListCard } from "./ExecutivesListCard";

export const ExecutivesList: React.FC = () => (
  <section className="flex flex-col items-center justify-center px-10 py-20">
    <div className="center-post-run-ani relative flex flex-col items-center justify-center gap-2 py-4">
      <h1 className="text-custom-green text-xl font-semibold">Meet the Team</h1>
      <h1
        className={`${nunitoFont.className} text-center text-xl font-extrabold md:text-4xl`}
      >
        21th Executives Council
      </h1>
    </div>
    <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
      {ExecutivesCouncilList.map(({ name, position, image }) => (
        <ExecutivesListCard
          key={name}
          name={name}
          position={position}
          image={image}
        />
      ))}
    </div>
  </section>
);
