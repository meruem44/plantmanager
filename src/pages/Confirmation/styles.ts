import styled from "styled-components/native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: ${metrics.marginbar}px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Footer = styled.View`
  padding: 20px;
`;

export const Emoji = styled.Text`
  font-size: 80px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 18px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 18px;
  padding: 20px 0px;
  color: ${colors.heading};
`;
