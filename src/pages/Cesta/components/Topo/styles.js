import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
      },
      titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        paddingTop: 8,
      },
})