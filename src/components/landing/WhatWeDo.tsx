import { NacosLogo } from "@/assets";
import { WhatWeDoList } from "@/data";
import { nunitoFont, rubikFont } from "@/lib/font";
import Image from "next/image";
import React from "react";

export const WhatWeDo: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-10 py-20">
      <div className="center-post-run-ani relative flex w-full flex-col items-center justify-center gap-4 py-5 md:max-w-150">
        <h4
          className={`${nunitoFont.className} text-custom-green text-xl font-extrabold`}
        >
          WHAT WE DO
        </h4>
        <h1
          className={`${nunitoFont.className} text-center text-xl font-extrabold md:text-4xl`}
        >
          We Drive Innovation and Rapid Development among Computing Students
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 py-5 lg:grid-cols-3">
        <div className="flex flex-col gap-6 py-2">
          {WhatWeDoList.slice(0, 2).map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-2"
            >
              <div className="bg-custom-green flex h-15 w-15 items-center justify-center rounded-sm transition-all duration-500 hover:translate-x-5">
                <Icon
                  className="text-white"
                  fill="white"
                  strokeWidth={0.1}
                />
              </div>
              <h1 className={`${nunitoFont.className} text-2xl font-bold`}>
                {title}
              </h1>
              <p className={`${rubikFont.className} text-[#6b6a75]`}>{desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-md border shadow-md">
          <Image
            src={NacosLogo}
            alt="nacos logo"
            draggable={false}
          />
        </div>
        <div className="flex flex-col gap-6 py-2">
          {WhatWeDoList.slice(2, 3).map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-2"
            >
              <div className="bg-custom-green flex h-15 w-15 items-center justify-center rounded-sm transition-all duration-500 hover:translate-x-5">
                <Icon
                  fill="white"
                  color="white"
                  strokeWidth={0.1}
                />
              </div>
              <h1 className={`${nunitoFont.className} text-2xl font-bold`}>
                {title}
              </h1>
              <p className={`${rubikFont.className} text-[#6b6a75]`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
