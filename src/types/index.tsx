declare global {
  interface INavItems {
    title: string;
    link: string;
    dropdownItems?: {
      title: string;
      link: string;
    }[];
  }
}

export {};
