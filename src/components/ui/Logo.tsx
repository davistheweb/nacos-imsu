import { NacosImsuLogo } from "@/assets";
import { poppinsFont } from "@/lib/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC<{ textClassName?: string }> = ({
  textClassName,
}) => (
  <div>
    <Link
      href="/"
      className="flex items-center gap-2 md:gap-4"
    >
      <Image
        src={NacosImsuLogo}
        alt="logo"
        width={70}
        height={70}
        draggable={false}
      />
      <div className="flex flex-col">
        <span
          className={`${poppinsFont.className} font-bold md:text-[20px] ${cn(textClassName)}`}
        >
          NACOS
        </span>
        <span
          className={`${poppinsFont.className} font-bold md:text-[20px] ${cn(textClassName)}`}
        >
          IMSU CHAPTER
        </span>
      </div>
    </Link>
  </div>
);
