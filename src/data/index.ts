import {
  AvatarImage,
  ComrAjaerehUchenna,
  ComrChikezieJane,
  ComrChilakaEmmanuel,
  ComrChinekeDennis,
  ComrEjimoforCollette,
  ComrFredricksFred,
  ComrIbawuchMatthew,
  ComrIbehAmaka,
  ComrIwuAugustina,
  ComrJosiahDavis,
  ComrMegwaStanley,
  ComrNwanagaAugustine,
  ComrOnyeaghalaEmmanuel,
  ComrOnyekaBlessing,
  ComrOnyirioforNzubechi,
  ComrUremegbulemEze,
} from "@/assets";
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
      {
        title: "Chapter Presidents",
        link: "/chapter-presidents",
      },
      {
        title: "Executive Council",
        link: "/executives-council",
      },
      // { title: "NACOS Chapters (Annual Dues 2025/2026)", link: "#" },
    ],
  },
  {
    title: "Events",
    link: "/events",
  },
  { title: "Gallery", link: "/gallery" },
  // { title: "Blog", link: "/blog" },
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

const FooterQuickLinks: IFooterQuickLinks[] = navItems.flatMap((quickLinks) => [
  { title: quickLinks.title, link: quickLinks.link },
  ...(quickLinks.dropdownItems || []),
]);

const ChapterPresidentsList: IChapterPresidentsList[] = [
  {
    name: "Comr. Asodike Kelechi Thank God",
    timeline: "15th Republic",
    image: AvatarImage,
  },
  {
    name: "Comr. Onyiriofor Nzubechi Edison",
    timeline: "16th Republic",
    image: ComrOnyirioforNzubechi,
  },
  {
    name: "Comr. Onwuachu Chukwuemeka Augustine (Empire)",
    timeline: "17th Republic",
    image: AvatarImage,
  },
  {
    name: "Comr. Uremegbulem Eze Saviour",
    timeline: "18th Republic",
    image: ComrUremegbulemEze,
  },
  {
    name: "Comr. Ajaereh Uchenna Precious (Santi)",
    timeline: "19th Republic",
    image: ComrAjaerehUchenna,
  },
  {
    name: "Comr. Orji Samuel Uchenna",
    timeline: "20th Republic",
    image: AvatarImage,
  },
  {
    name: "Comr. Chinke Dennis Chijindu",
    timeline: "21st Republic",
    image: ComrChinekeDennis,
  },
];

const ExecutivesCouncilList: IExecutivesCouncilList[] = [
  {
    name: "Comr. Chinke Dennis Chijindu, OCS",
    position: "President",
    image: ComrChinekeDennis,
  },
  {
    name: "Comr. Iwu Augustina Chizoba",
    position: "Vice President",
    image: ComrIwuAugustina,
  },
  {
    name: "Comr. Josiah Davis Chimzuruoke",
    position: "Director of ICT",
    image: ComrJosiahDavis,
  },
  {
    name: "Comr. Onyeka Blessing Nkeiruka",
    position: "Secretary-General",
    image: ComrOnyekaBlessing,
  },
  {
    name: "Comr. Fredricks Fredrick Obioma",
    position: "Asst. Secretary-General",
    image: ComrFredricksFred,
  },

  {
    name: "Comr. Ibeh Amaka Genevieve",
    position: "Director of Finance",
    image: ComrIbehAmaka,
  },
  {
    name: "Comr. Ibawuchi Matthew Chukwuebuka",
    position: "Director of Welfare",
    image: ComrIbawuchMatthew,
  },
  {
    name: "Comr. Nwanaga Augustine Chidera.",
    position: "Director of Information",
    image: ComrNwanagaAugustine,
  },
  {
    name: "Comr. Chikezie Jane Ozioma",
    position: "Director of Sports",
    image: ComrChikezieJane,
  },
  {
    name: "Comr. Megwa Stanley Chinaemerem",
    position: "Asst. Director of Sports",
    image: ComrMegwaStanley,
  },
  {
    name: "Comr. Ejimofor Collette Chinwemmeri",
    position: "Director of Socials",
    image: ComrEjimoforCollette,
  },
  {
    name: "Comr. Chilaka Emmanuel Chibuike",
    position: "Asst. Director of Socials",
    image: ComrChilakaEmmanuel,
  },

  {
    name: "Comr. Onyeaghala Emmanuel",
    position: "Public Relations Officer",
    image: ComrOnyeaghalaEmmanuel,
  },
];

export {
  ChapterPresidentsList,
  ExecutivesCouncilList,
  FooterQuickLinks,
  navItems,
  WhatWeDoList,
};
