import React from "react";
import { StatusBar } from "react-native";

import { Welcome } from "./pages/Welcome";
import colors from "./styles/colors";

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.green}
        translucent
        barStyle="light-content"
      />
      <Welcome />
    </>
  );
};

export default App;
