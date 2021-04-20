import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

export const Container = styled(RectButton)`
  background-color: ${colors.green};
  height: ${metrics.height * 0.065}px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  width: ${metrics.width * 0.6}px;
  elevation: 5px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-family: ${fonts.text};
`;
