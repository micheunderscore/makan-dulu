import { theme } from "root/src/theme";
import tailwind from "tailwind-rn";

export const styles = {
  container: {
    root: [
      tailwind("w-full h-full items-center justify-center"),
      { backgroundColor: theme.background, flexGrow: 1 },
    ],
    text: tailwind("items-center my-40"),
    footer: tailwind("h-40 justify-end p-10"),
  },
  flatlist: {
    root: tailwind("w-full h-full"),
    container: tailwind("items-center justify-evenly"),
  },
  text: {
    title: [tailwind("text-5xl font-bold mb-6 p-2 text-gray-900")],
    special: [
      tailwind("rounded"),
      { color: theme.secondary, backgroundColor: theme.primary },
    ],
    subtitle: [
      tailwind("text-2xl font-semibold text-white p-2 rounded bg-gray-900"),
    ],
    copyright: tailwind("text-sm italic"),
  },
  logo: {
    text: [tailwind("mx-2"), { top: 4, height: "50px", width: "335px" }],
  },
};
