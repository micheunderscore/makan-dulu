import tailwind from "tailwind-rn";

export const styles = {
  container: {
    root: tailwind("relative w-full flex-row justify-start m-10"),
  },
  text: {
    title: tailwind("text-5xl px-10"),
    subtitle: tailwind(
      "text-2xl font-semibold text-white p-2 rounded bg-gray-900"
    ),
  },
  image: {
    product: [tailwind("rounded-3xl"), { height: 500, width: 500 }],
  },
};
