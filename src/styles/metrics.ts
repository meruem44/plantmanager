import { Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("screen");

export default {
  width,
  height,
  marginbar: StatusBar.currentHeight,
};
