import { NacosImsuLogo } from "@/assets";
import { nunitoFont } from "@/lib/font";
import Image from "next/image";
import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact: React.FC = () => {
  return (
    <>
      <section className="executives-bg flex h-80 items-end justify-center pb-2">
        <h1
          className={`text-center ${nunitoFont.className} text-2xl font-extrabold text-white md:text-5xl`}
        >
          Contact Us
        </h1>
      </section>
      <section className="flex w-full flex-col gap-2 px-4 pt-25 md:px-8">
        <div className="flex w-full flex-col items-center justify-between pb-10 lg:flex-row">
          <div className="">
            <Image
              src={NacosImsuLogo}
              alt="nacos logo"
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};
