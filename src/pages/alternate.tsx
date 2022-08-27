import React from "react";
import {
  FlatList,
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
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: "blue",
  },
});

const outString: string[] = [];
for (let i = 0; i < 100; i++) outString.push(`${i}`);

interface MyResponseBodyType {
  products(first: 10): {
    edges: {
      node: {
        description: string;
        title: string;
      };
    };
  };
}

const Alternate: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        AYAYAYA
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL(`/`)}>
        <Text style={styles.link} accessibilityRole="link">
          Go Back
        </Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(x) => x}
        data={outString}
        renderItem={(x) => <Text>{x.item}</Text>}
      />
    </View>
  );
};

export default Alternate;
