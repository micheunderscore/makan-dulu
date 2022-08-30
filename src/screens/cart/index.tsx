import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const CartScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Cart Screen
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL(`/`)}>
        <Text style={styles.link} accessibilityRole="link">
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};
