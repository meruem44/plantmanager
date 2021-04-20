import "react-native-gesture-handler";

import React from "react";
import Toast from "react-native-toast-message";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import Aplication from "./src";

export default function App() {
  const [isLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!isLoaded) return <AppLoading />;

  return (
    <>
      <Aplication />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
