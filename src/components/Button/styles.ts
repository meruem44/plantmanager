import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import colors from "../../styles/colors";

export const Container = styled(RectButton)`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  width: 56px;
`;
