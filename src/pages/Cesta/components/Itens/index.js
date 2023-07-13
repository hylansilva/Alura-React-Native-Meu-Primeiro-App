import { Image, View} from "react-native";
import Texto from "../../../../components/Texto";
import { styles } from "./styles";

export default function Item({ item: { nome, imagem } }) {
  return (
    <View key={nome} style={styles.item}>
      <Image style={styles.imagem} source={imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
  );
}
