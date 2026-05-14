import { Book, Laptop, Presentation } from "lucide-react";

const navItems: INavItems[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "#",
    dropdownItems: [
      {
        title: "Association",
        link: "/association",
      },
      // { title: "NACOS Chapters (Annual Dues 2025/2026)", link: "#" },
    ],
  },
  {
    title: "Events",
    link: "/events",
  },
  { title: "Gallery", link: "/gallery" },
  { title: "Blog", link: "/blog" },
];

const WhatWeDoList: IWhatWeDoList[] = [
  {
    Icon: Presentation,
    title: "Webinars",
    desc: "We organize online symposia to simplify advanced computing technologies.",
  },
  {
    Icon: Book,
    title: "Bootcamps",
    desc: "We organize bootcamps on the practical and theoretical aspects of computing.",
  },
  {
    Icon: Laptop,
    title: "Computing Education ",
    desc: "We provide access to professional courses on the latest computing trends and technologies.",
  },
];

export { navItems, WhatWeDoList };
