import { nunitoFont, rubikFont } from "@/lib/font";
import Image from "next/image";
import React from "react";

export const PastPatronsCard: React.FC<TPastPatronsListProps> = ({
  name,
  timeline,
  image,
}) => (
  <div className="scaleIn group/scale px-6">
    <div className="bg-[#eef9ff]">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt="avatar"
            className="-z-10 object-cover transition-all duration-300 ease-in group-hover/scale:scale-105"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
          <h1
            className={`text-custom-green text-xl font-semibold ${nunitoFont.className}`}
          >
            {name}
          </h1>
          <p className={`${rubikFont.className} text-[#6b6a75]`}>{timeline}</p>
        </div>
      </div>
    </div>
  </div>
);
