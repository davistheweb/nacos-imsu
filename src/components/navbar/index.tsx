"use client";
import { navItems } from "@/data";
import { rubikFont } from "@/lib/font";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Logo } from "../ui/Logo";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuIsOpen, setIsMobileMenuIsOpen] = useState<boolean>(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    };

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => href === pathName;

  return (
    <>
      <nav
        className={`transition-top fixed flex w-full justify-between px-8 duration-200 ${isScrolled ? "top-0 bg-white" : "top-9 border-b border-white/20 bg-transparent"} z-50 py-6`}
      >
        <div className="flex">
          <Logo
            textClassName={`${isScrolled ? "text-custom-green" : "text-white"}`}
          />
        </div>

        <div className="h-ful hidden items-center gap-5 lg:flex">
          <ul className="flex space-x-5">
            {navItems.map(({ title, link, dropdownItems }, i) => (
              <li
                key={i}
                className="group/nav relative h-full"
              >
                <Link
                  href={link}
                  className={`inline-flex gap-1 hover:text-[#138601] ${isScrolled ? `${isActive(link) ? "text-[#138601]" : "text-black"}` : `${isActive(link) ? "text-[#138601]" : "text-white"}`}`}
                >
                  {title}
                  {dropdownItems && (
                    <ChevronDown className="opacity-80 transition-all group-hover/nav:rotate-180" />
                  )}
                </Link>
                {dropdownItems && (
                  <div className="invisible absolute top-full left-0 h-40 w-max translate-y-4 bg-white py-4 opacity-0 shadow-sm transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                    <ul className="flex flex-col gap-3 py-2">
                      {dropdownItems.map((item, _i) => (
                        <li
                          key={_i}
                          className="group/item flex flex-col gap-3"
                        >
                          <Link
                            href={item.link}
                            className={`${rubikFont.className} group-hover/item:text-custom-green w-full px-4 py-2 text-black transition-all duration-300 group-hover/item:bg-[#eef9ff]`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-custom-green cursor-pointer rounded-sm px-4 py-2 font-medium text-white uppercase"
            >
              Contact
            </Link>
          </div>
        </div>

        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsMobileMenuIsOpen((prev) => !prev)}
        >
          {isMobileMenuIsOpen ? (
            <X
              size={30}
              color={isScrolled ? "black" : "white"}
            />
          ) : (
            <Menu
              color={isScrolled ? "black" : "white"}
              size={30}
            />
          )}
        </button>
      </nav>
      <MobileNav
        isMobileMenuIsOpen={isMobileMenuIsOpen}
        setMobileMenuIsOpen={setIsMobileMenuIsOpen}
      />
    </>
  );
};
