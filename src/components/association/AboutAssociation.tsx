import { NacosLogo } from "@/assets";
import { nunitoFont } from "@/lib/font";
import Image from "next/image";
import React from "react";

export const AboutAssociation: React.FC = () => (
  <section className="flex flex-col items-center justify-center gap-5 px-10 py-20 lg:flex-row">
    <div className="flex flex-col gap-8 lg:max-w-175">
      <div className="st-post-run-ani relative flex flex-col gap-2 py-4">
        <h1 className="text-custom-green text-xl font-semibold">ABOUT US</h1>
        <h1
          className={`${nunitoFont.className} text-xl font-extrabold md:text-4xl`}
        >
          An Insight Into One of NACOS' Most Structured Student Bodies
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[#6b6a75]">
          The Nigeria Association of Computing Students, Imo State University
          Chapter (NACOS-IMSU) is the umbrella body for students studying
          Computer Science in Imo State University, Owerri. <br /> The
          association has been in existence for over two decades and is one of
          the local chapters under the Nigeria Association of Computing Students
          (NACOS), which was established in July 1993 by a consortium of
          students under the name Nigeria Association of Computer Science
          Students (NACOSS), with the endorsement of the Nigeria Computer
          Society (NCS) as its parent organization.
        </p>
        <p className="text-[#6b6a75]">
          NACOS IMSU serves as a dedicated platform for tech-inclined students
          engaged in various IT-related fields to collectively address and
          formulate policies geared towards advanced computing in a coordinated
          and structured manner.
        </p>
        <p className="text-[#6b6a75]">
          With a substantial membership strength of over one thousand registered
          members, NACOS IMSU asserts itself as one of the largest and most
          coordinated chapters under NACOS.
        </p>
      </div>
      {/* <div className="grid w-fit gap-x-10 gap-y-4 sm:grid-cols-2">
        {[
          "Professional Certifications",
          "Technical Access",
          "24/7 Support",
          "Growth",
        ].map((word) => (
          <div
            key={word}
            className="flex items-center gap-4"
          >
            <Check
              color="#138601"
              size={30}
              strokeWidth={3.5}
            />

            <h4 className={`text-xl font-semibold ${nunitoFont.className}`}>
              {word}
            </h4>
          </div>
        ))}
      </div>
      <div className="flex gap-10">
        <div className="bg-custom-green flex h-15 w-15 items-center justify-center rounded-sm transition-all duration-500 hover:translate-x-5">
          <Phone
            fill="white"
            color="white"
            strokeWidth={0.1}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className={`font-semibold md:text-xl ${nunitoFont.className}`}>
            For enquiries, call:
          </h3>
          <h3
            className={`md:text-2xl ${nunitoFont.className} text-custom-green font-bold`}
          >
            +234 907 662 6835
          </h3>
        </div>
      </div> */}
    </div>

    <div className="min-w-87.5 lg:min-w-150">
      <Image
        src={NacosLogo}
        alt="nacos logo"
      />
    </div>
  </section>
);
