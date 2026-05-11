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

export { navItems };
