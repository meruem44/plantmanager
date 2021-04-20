import styled, { css } from "styled-components/native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

interface IIputProps {
  isFocus: boolean;
  isToastActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 ${metrics.width * 0.01}px;
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Label = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput<IIputProps>`
  border-bottom-width: 1px;
  border-color: ${({ onFocus }) => (onFocus ? colors.green : colors.gray)};
  width: ${metrics.width * 0.8}px;
  margin-top: 50px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  font-family: ${fonts.text};

  ${({ isToastActive }) =>
    isToastActive &&
    css`
    border-bottom-width: 2px;
    border-color; ${colors.red};
  `}
`;
