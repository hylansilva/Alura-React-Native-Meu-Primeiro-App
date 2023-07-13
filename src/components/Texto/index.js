import React from "react";
import { Text } from "react-native";

import { styles } from "./styles";

export default function Texto({ children, style }) {
  let est = styles.texto;

  if (style?.fontWeigth === 'bold') {
    est = styles.textoNegrito;
  }

  return <Text style={[style, est.texto]}>{children}</Text>;
}
