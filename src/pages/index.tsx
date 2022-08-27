import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});

const App: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL(`/alternate`)}>
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

export default App;
