import React from "react";
import { useRoute } from "@react-navigation/core";

import { Container, Emoji, Title, Content, Footer, SubTitle } from "./styles";
import Button from "../../components/Button";

const Confirmation: React.FC = () => {
  const {
    params: { name },
  } = useRoute();

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho {name}</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas {"\n"}
          plantinhas com muito cuidado.
        </SubTitle>

        <Footer>
          <Button textButton="Começar" />
        </Footer>
      </Content>
    </Container>
  );
};

export { Confirmation };
