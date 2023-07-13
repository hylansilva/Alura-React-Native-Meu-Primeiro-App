import { Image } from "react-native";

import topo from "../../../../../assets/topo.png";

import { styles } from "./styles";
import Texto from "../../../../components/Texto";

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  );
}
