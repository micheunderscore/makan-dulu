import { PropsWithChildren } from "react";

export interface SearchProps extends PropsWithChildren {
  query?: string | string[];
}
