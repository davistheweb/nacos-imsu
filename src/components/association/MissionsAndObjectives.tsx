"use client";
import { nunitoFont, rubikFont } from "@/lib/font";
import { Dot } from "lucide-react";
import React, { useState } from "react";

export const MissionsAndObjectives: React.FC = () => {
  const [currentPurposeTab, setCurrentPurposeTab] =
    useState<TCurrentPurposeTab>("mission-tab");

  const handleChangeCurrentPurposeTab = (tab: TCurrentPurposeTab) => {
    setCurrentPurposeTab(tab);
  };
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-10 py-20">
      <div className="center-post-run-ani relative flex flex-col gap-2 py-4">
        <h1
          className={`${nunitoFont.className} text-center text-xl font-extrabold md:text-4xl`}
        >
          OUR MISSION AND OBJECTIVES
        </h1>
      </div>

      <div className="bg-custom-green">
        <div className="flex h-20 gap-0.5 border-b p-8 pb-15">
          <button
            className={`h-10 w-fit px-3 font-medium ${nunitoFont.className} cursor-pointer border border-white text-2xl hover:bg-white hover:text-black ${currentPurposeTab === "mission-tab" ? "bg-white text-black" : "text-white"}`}
            onClick={() => handleChangeCurrentPurposeTab("mission-tab")}
          >
            MISSION
          </button>
          <button
            className={`h-10 w-fit px-3 font-medium ${nunitoFont.className} cursor-pointer border border-white text-2xl hover:bg-white hover:text-black ${currentPurposeTab === "objectives-tab" ? "bg-white text-black" : "text-white"}`}
            onClick={() => handleChangeCurrentPurposeTab("objectives-tab")}
          >
            OBJECTIVES
          </button>
        </div>
        {currentPurposeTab === "mission-tab" && (
          <ul className="flex flex-col gap-4 p-8">
            {[
              "At the Nigeria Association of Computing Students, Imo State University Chapter (NACOS-IMSU), our mission is to bring together a vibrant network of aspiring IT professionals driven by a common vision—to spark innovation, technological growth, and entrepreneurial development both within and outside the university setting.",
              "We are committed to building an inclusive and forward-thinking ecosystem that promotes digital empowerment among student IT enthusiasts, thereby advancing the role of information technology.",
              "Our vision is to emerge as the leading student body in Information Technology and Entrepreneurship, recognized for excellence, innovation, and transformative impact.",
            ].map((mission, i) => (
              <li
                key={i}
                className="flex"
              >
                <div>
                  <Dot
                    color="white"
                    size={30}
                  />
                </div>

                <span className={`${rubikFont.className} text-white`}>
                  {mission}
                </span>
              </li>
            ))}
          </ul>
        )}

        {currentPurposeTab === "objectives-tab" && (
          <div className="flex flex-col gap-5 p-8">
            <div>
              <h1 className={`text-white ${rubikFont.className}`}>
                The Nigeria Association of Computing Students, Imo State
                University Chapter (NACOS-IMSU) is dedicated to reshaping the
                mindset of computing students in Imo State University while
                advancing the visibility and relevance of the Information
                Technology profession.
                <br /> Through seminars, lectures, symposia, workshops, and
                other impactful initiatives, we actively promote the study and
                practical application of computing, encouraging meaningful
                knowledge acquisition.
                <br />
                NACOS IMSU also provides a platform where beginners and seasoned
                experts in the field of Information Technology can network and
                make contact with other tech minds in the industry.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className={`text-white ${rubikFont.className}`}>
                Our Objectives:
              </h1>
              <ul className="flex flex-col gap-4">
                {[
                  "To protect and enhance the reputation of the computing profession both within and outside Imo State University.",
                  "To promote awareness and understanding of computing studies within Imo State University and on a larger scale.",
                  "To advance the computing profession through the organization of seminars, symposia, webinars, and other strategic activities.",
                ].map((objectives, i) => (
                  <li
                    key={i}
                    className="flex"
                  >
                    <div>
                      <Dot
                        color="white"
                        size={30}
                      />
                    </div>

                    <span className={`${rubikFont.className} text-white`}>
                      {objectives}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
