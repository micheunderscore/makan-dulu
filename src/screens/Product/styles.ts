import tailwind from "tailwind-rn";

export const styles = {
  container: {
    root: tailwind("relative w-full flex-row justify-start m-10"),
    dBox: [],
  },
  text: {
    title: tailwind("text-5xl"),
    subtitle: tailwind(
      "text-2xl font-semibold text-white p-2 rounded bg-gray-900"
    ),
    description: [tailwind("py-5 text-xl"), { width: "50%" }],
    tag: {
      head: tailwind("text-xl font-bold"),
      tail: tailwind("text-base italic text-gray-500"),
    },
  },
  image: {
    product: [tailwind("rounded-3xl"), { height: 500, width: 500 }],
  },
};
