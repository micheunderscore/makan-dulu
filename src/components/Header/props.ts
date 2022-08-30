import { PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren {
  headerOptions: HeaderOption[];
}

export interface HeaderOption {
  title?: string;
  link?: string;
}
