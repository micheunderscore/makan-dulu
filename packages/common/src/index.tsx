import React, { useState } from "react";
import { Button, StyleProp, Text, View, ViewStyle } from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);
  // const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle: StyleProp<ViewStyle> = {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <Text>{count}</Text>
      Hello World!
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};
