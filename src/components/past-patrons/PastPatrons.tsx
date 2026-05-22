import { PastPartonsList } from "@/data";
import React from "react";
import { PastPatronsCard } from "./PastPatronsCard";

export const PastPatrons: React.FC = () => (
  <section className="flex items-center justify-center px-4 py-20 md:px-10">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {PastPartonsList.map(({ name, timeline, image }) => (
        <PastPatronsCard
          key={name}
          name={name}
          timeline={timeline}
          image={image}
        />
      ))}
    </div>
  </section>
);
