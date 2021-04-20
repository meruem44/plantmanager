import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, TextButton } from "./styles";

interface IButtonProps extends RectButtonProps {
  textButton: string;
}

const Button: React.FC<IButtonProps> = ({ textButton, ...rest }) => {
  return (
    <Container style={{ elevation: 8 }} {...rest}>
      <TextButton>{textButton}</TextButton>
    </Container>
  );
};

export default Button;
