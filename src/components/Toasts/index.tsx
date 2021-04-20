import React, { useCallback, useEffect } from "react";
import Toast from "react-native-toast-message";

interface IToastProps {
  type: "success" | "error" | "info";
  position: "top" | "bottom";
  title: string;
  content: string;
  visibilityTime?: number | undefined;
  onShow?(): void;
  onHide?(): void;
  onPress?(): void;
}

const Toasts = ({ title, content, ...rest }: IToastProps) => {
  Toast.show({
    visibilityTime: 4000,
    text1: title,
    text2: content,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {},
    props: {},
    ...rest,
  });
};

export { Toasts };
