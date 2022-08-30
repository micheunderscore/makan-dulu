import { theme } from "root/src/theme";
import tailwind from "tailwind-rn";

export const styles = {
  container: {
    root: [tailwind("relative p-20"), { backgroundColor: theme.background }],
    listEmpty: [tailwind("flex items-center my-20")],
  },
  flatlist: {
    root: tailwind("h-full"),
    container: tailwind("items-center justify-center"),
  },
  text: {
    listEmpty: tailwind("text-4xl"),
    subtitle: [
      tailwind("text-2xl font-semibold text-white p-2 rounded bg-gray-900"),
    ],
  },
  search: {
    component: tailwind("p-6"),
    icon: { top: 12 },
  },
};
