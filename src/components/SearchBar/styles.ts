import tailwind from "tailwind-rn";

export const styles = {
  container: tailwind("relative flex-grow"),
  searchBar: {
    container: tailwind("h-8 flex-grow mx-5 p-4 pr-8 bg-gray-200 rounded-xl"),
    text: tailwind("text-base text-black"),
  },
};
