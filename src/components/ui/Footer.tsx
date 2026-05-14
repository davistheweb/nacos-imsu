import { NacosImsuLogo } from "@/assets";
import { FooterQuickLinks } from "@/data";
import { nunitoFont, rubikFont } from "@/lib/font";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => (
  <footer className="md:gird-cols-2 grid w-full grid-cols-1 justify-items-center gap-5 bg-black px-10 py-10 lg:grid-cols-3">
    <div className="flex flex-col gap-4">
      <div className="max-h-50 max-w-50">
        <Image
          src={NacosImsuLogo}
          alt="naocs logo"
        />
      </div>
      <p className={`${rubikFont.className} text-white`}>
        Nigeria Association of Computing Students (NACOS)
      </p>
      <p className={`${rubikFont.className} text-white`}>
        Imo State University Chapter
      </p>
    </div>
    <div className="flex flex-col gap-3">
      <div className="st-post-run-ani relative py-3 text-xl font-bold md:text-3xl">
        <h1 className={`${nunitoFont.className} text-white`}>Get In Touch</h1>
      </div>
      <div className="flex gap-2">
        <div>
          <MapPin
            size={20}
            color="#138601"
          />
        </div>
        <p className={`${rubikFont.className} font-normal text-white!`}>
          <span className="font-bold">Secretariat: </span>
          <br />
          Department Of Computer Science
          <br /> Imo State University, Owerri, Imo State.
          <br />
          P.M.B 2000
        </p>
      </div>
      <div className="flex gap-2">
        <Mail
          size={20}
          color="#138601"
        />
        <a
          href="mailto:nacosimsu@gmail.com"
          target="_blank"
          className={`${rubikFont.className} text-custom-green`}
        >
          nacosimsu@gmail.com
        </a>
      </div>
      <div className="space-y-2 py-4">
        <div className="flex gap-2">
          <Phone
            size={20}
            color="#138601"
          />
          <a
            href="tel:+2349076626835"
            target="_blank"
            className={`${rubikFont.className} text-custom-green`}
          >
            +2349076626835
          </a>
        </div>
        <div className="flex gap-2">
          <Phone
            size={20}
            color="#138601"
          />
          <a
            href="tel:+2349076626835"
            target="_blank"
            className={`${rubikFont.className} text-custom-green`}
          >
            +2349076626835
          </a>
        </div>
        <div className="flex gap-2">
          <Phone
            size={20}
            color="#138601"
          />
          <a
            href="tel:+2349018797128"
            target="_blank"
            className={`${rubikFont.className} text-custom-green`}
          >
            +2349018797128
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-3">
      <div className="st-post-run-ani relative py-3 text-xl font-bold md:text-3xl">
        <h1 className={`${nunitoFont.className} text-white`}>Quick Links</h1>
      </div>
      <div className="flex flex-col gap-2">
        {FooterQuickLinks.map(({ title, link }) => (
          <div
            key={title}
            className="flex cursor-pointer items-center gap-2 transition-all duration-500 hover:translate-x-4"
          >
            <MoveRight
              size={20}
              color="#138601"
            />
            <Link
              className={`${rubikFont.className} text-white`}
              href={link}
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </footer>
);
