import React from "react";

import { Container, Title, Image, Description } from "./styles";
import Button from "../../components/Button";

import walterImage from "../../assets/watering.png";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Title>

      <Image source={walterImage} />

      <Description>
        Nõ esqueça mais de regr suas plantas. Nós cuidamos de lembrar você
        sempre que precisar
      </Description>

      <Button />
    </Container>
  );
};

export { Welcome };
