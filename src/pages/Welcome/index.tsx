import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/core";

import { Container, Title, Image, Description, Button } from "./styles";

import walterImage from "../../assets/watering.png";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../styles/colors";

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate("UserIndentification");
  }, []);

  return (
    <Container>
      <Title>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Title>

      <Image resizeMode="contain" source={walterImage} />

      <Description>
        Nõ esqueça mais de regr suas plantas. Nós cuidamos de lembrar você
        sempre que precisar
      </Description>

      <Button onPress={handleNavigate}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={colors.white}
        />
      </Button>
    </Container>
  );
};

export { Welcome };
