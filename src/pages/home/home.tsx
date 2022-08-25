import logo from "assets/logo.svg";
import { Counter } from "components";
import { useState } from "react";
import { Button, Image, Text, View } from "react-native";

export const HomeScreen: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image source={{ uri: logo }} style={{ width: 300, height: 300 }} />
      <Counter />
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};
