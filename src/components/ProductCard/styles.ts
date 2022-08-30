import tailwind from "tailwind-rn";

export const styles = {
  container: [
    tailwind("relative bg-white overflow-hidden rounded-xl m-5"),
    { width: 200, zIndex: 1, shadowOpacity: 0.15, shadowRadius: 20 },
  ],
  image: [tailwind("rounded-2xl"), { height: 200, width: 200 }],
  text: {
    container: tailwind("p-5"),
    title: tailwind("text-base font-bold"),
    price: tailwind("text-base text-gray-700 w-full"),
  },
};
