import { ChapterPresidentsList } from "@/data";
import React from "react";
import { ChapterPresidentsCard } from "./ChapterPresidentsCard";

export const ChapterPresidents: React.FC = () => (
  <section className="flex items-center justify-center px-4 py-20 md:px-10">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {ChapterPresidentsList.map(({ name, timeline, image }) => (
        <ChapterPresidentsCard
          key={name}
          name={name}
          timeline={timeline}
          image={image}
        />
      ))}
    </div>
  </section>
);
