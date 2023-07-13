import { Image, View } from "react-native";
import Texto from "../../../../components/Texto";
import { styles } from "./styles";
import Button from "../../../../components/Button";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  buttonName,
}) {
  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={logoFazenda} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
      <Button buttonName={buttonName} />
    </>
  );
}
