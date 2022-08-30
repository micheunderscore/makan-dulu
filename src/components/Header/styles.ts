import tailwind from "tailwind-rn";

export const styles = {
  container: tailwind("h-full w-full"),
  buttonBar: [tailwind("flex-grow h-full flex-row justify-evenly")],
  logo: {
    container: [tailwind("flex-row items-center justify-center h-full")],
    image: [{ height: "50px", width: "50px" }],
    text: [tailwind("mx-5"), { height: "50px", width: "335px" }],
  },
  header: {
    spacer: tailwind("h-20"),
    root: [
      tailwind(
        "bg-white h-20 w-full px-10 items-center justify-center flex-row"
      ),
      {
        zIndex: 1,
        shadowOpacity: 0.25,
        shadowRadius: 40,
      },
    ],
    btn: {
      root: [
        tailwind("flex-grow items-center justify-center"),
        { paddingHorizontal: "10%" },
      ],
      hovered: tailwind("bg-gray-100"),
      pressable: tailwind("flex-grow"),
      wrapper: tailwind("flex-grow"),
    },
    text: tailwind("text-xl"),
  },
  spacer: { width: "45%" },
  sbCart: {
    container: tailwind("flex-grow flex-row justify-evenly items-center"),
  },
};
