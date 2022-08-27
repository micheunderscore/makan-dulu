import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const HomeScreen: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL(`/cart`)}>
        <Text style={styles.link} accessibilityRole="link">
          A universal link
        </Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
    </View>
  );
};
