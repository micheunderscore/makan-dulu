import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <View>
          <Text>Hello from React Native Web!</Text>
        </View>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
