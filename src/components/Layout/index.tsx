import { PropsWithChildren } from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { styles } from "./styles";

export const Layout: React.FC<ScrollViewProps & PropsWithChildren> = (
  props
) => {
  return (
    <ScrollView {...props} style={styles.container}>
      {props.children}
    </ScrollView>
  );
};
