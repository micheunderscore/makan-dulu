import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HomeScreen } from "./pages";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
