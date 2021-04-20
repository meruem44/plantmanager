import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import { Welcome } from "../pages/Welcome";
import { UserIndentification } from "../pages/UserIndentification";
import { Confirmation } from "../pages/Confirmation";
import colors from "../styles/colors";

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIndentification" component={UserIndentification} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
};

export { AuthRoutes };
