import { ComponentType, SVGProps } from "react";

declare global {
  type IconType = ComponentType<
    SVGProps<SVGSVGElement> & {
      size?: number;
    }
  >;
  interface INavItems {
    title: string;
    link: string;
    dropdownItems?: {
      title: string;
      link: string;
    }[];
  }

  interface IFooterQuickLinks extends INavItems {}

  interface IWhatWeDoList {
    Icon: IconType;
    title: string;
    desc: string;
  }

  type TCurrentPurposeTab = "mission-tab" | "objectives-tab";
}

export {};
