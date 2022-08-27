import React from "react";
import { FlatList, Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const outString: string[] = [];
for (let i = 0; i < 100; i++) outString.push(`${i}`);

export const CartScreen: React.FC = () => {
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
