import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import colors from "../../styles/colors";
import metrics from "../../styles/metrics";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: ${metrics.marginbar}px;
  padding: ${metrics.height * 0.02}px 0;
`;

export const Title = styled.Text`
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
`;

export const Image = styled.Image`
  height: ${metrics.height * 0.3}px;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
  font-family: ${fonts.complement};
`;

export const Button = styled(RectButton)`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  width: 56px;
`;
