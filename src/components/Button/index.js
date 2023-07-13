import { TouchableOpacity } from "react-native";

import Texto from "../Texto";

import { styles } from "./styles";

export default function Button({ buttonName }) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Texto style={styles.textoBotao}>{buttonName}</Texto>
    </TouchableOpacity>
  );
}
