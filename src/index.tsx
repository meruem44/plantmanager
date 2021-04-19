import React from "react";
import { StatusBar } from "react-native";

import { Welcome } from "./pages/Welcome";
import colors from "./styles/colors";

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.green}
        barStyle="light-content"
        translucent
      />
      <Welcome />
    </>
  );
};

export default App;
