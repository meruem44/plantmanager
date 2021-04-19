import React from "react";

import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../styles/colors";

const Button: React.FC = () => {
  return (
    <Container>
      <Button>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={colors.white}
        />
      </Button>
    </Container>
  );
};

export default Button;
