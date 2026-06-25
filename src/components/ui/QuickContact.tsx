import { rubikFont } from "@/lib/font";
import { Mail, Phone } from "lucide-react";
import React from "react";

export const QuickContact: React.FC = () => (
  <div className="hidden w-full items-center bg-black px-8 py-2 lg:flex">
    <li className="flex flex-col gap-1 text-white sm:flex-row sm:gap-5">
      <a
        href="tel:+2349076626835"
        className={`${rubikFont.className} flex items-center gap-2 text-[14px] font-medium`}
      >
        <Phone
          fill="white"
          size={14}
        />{" "}
        +234 907 662 6835
      </a>
      <a
        href="mailto:nacosimsu@gmail.com"
        target="_blank"
        className={`${rubikFont.className} flex items-center gap-2 text-[14px] font-medium`}
      >
        <Mail size={14} />
        nacosimsu@gmail.com
      </a>
    </li>
  </div>
);
