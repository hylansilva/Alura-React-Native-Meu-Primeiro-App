import { View, FlatList } from "react-native";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Itens from "./components/Itens";
import Texto from "../../components/Texto";
import { styles } from "./styles";
import Item from "./components/Itens";
export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={styles.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}
