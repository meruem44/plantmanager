import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import { Container, Form, Emoji, Label, Input } from "./styles";
import Button from "../../components/Button";
import { Toasts } from "../../components/Toasts";

const UserIndentification: React.FC = () => {
  const { navigate } = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isToastActive, setIsToastActive] = useState(false);
  const [name, setName] = useState("");

  const handleInputBluer = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!name);
  }, [name]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputChange = useCallback((value: string) => {
    setIsFilled(!!value);
    setName(value);
  }, []);

  const handleViewToast = useCallback((value: boolean) => {
    setIsToastActive(value);
  }, []);

  const handleConfirmation = useCallback(() => {
    if (!name) {
      Toasts({
        type: "error",
        title: "Ops! 😯",
        content: "Antes de prosseguir, nos informe o seu nome",
        position: "top",
        onHide: () => handleViewToast(false),
        onShow: () => handleViewToast(true),
      });
      return;
    }

    navigate("Confirmation", { name });
  }, [name]);

  return (
    <Container>
      <Form>
        <Emoji>{isFilled ? "😀" : "😁"}</Emoji>
        <Label>
          Como podemos {"\n"}
          chamar você?
        </Label>
        <Input
          isToastActive={isToastActive}
          isFocus={isFocused || isFilled}
          onFocus={handleInputFocus}
          onBlur={handleInputBluer}
          onChangeText={handleInputChange}
          placeholder="Digite um nome"
        />

        <Button
          onPress={handleConfirmation}
          style={{ marginTop: 80 }}
          textButton="Confirmar"
        />
      </Form>
    </Container>
  );
};

export { UserIndentification };
