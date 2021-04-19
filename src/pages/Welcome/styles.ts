import styled from "styled-components/native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: ${metrics.marginbar}px;
  padding: ${metrics.height * 0.04}px 0;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const Image = styled.Image`
  width: 292px;
  height: 294px;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`;
