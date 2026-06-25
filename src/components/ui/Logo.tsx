import { NacosImsuLogo_V1 } from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC<{
  logoImage?: StaticImport;
}> = ({ logoImage = NacosImsuLogo_V1 }) => (
  <div>
    <Link
      href="/"
      className="flex items-center gap-2 md:gap-4"
    >
      <Image
        src={logoImage}
        alt="logo"
        draggable={false}
      />
      {/* <div className="flex flex-col">
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
      </div> */}
    </Link>
  </div>
);
