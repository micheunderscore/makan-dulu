import { useState } from "react";
import { Button, Linking, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export const LoginScreen: React.FC = () => {
  const [shop, setShop] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with your store url</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={shop}
            onChangeText={(e: string) => setShop(e)}
          />
          <View style={styles.myShopify}>
            <Text>.myshopify.com</Text>
          </View>
        </View>
        <Button
          title="Login"
          disabled={shop === ""}
          onPress={() =>
            Linking.openURL(`/api/auth/offline?shop=${shop}.myshopify.com`)
          }
        />
      </View>
    </View>
  );
};
