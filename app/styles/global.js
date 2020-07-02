import { StyleSheet, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
    galeryCards: {
        flex: 1,
        justifyContent: "center",
        height: 300,
        margin: 10,
    },

    text: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    image: {
        height: 250,
    },
    fullimage: {
        height: ScreenHeight - 104,
        margin: 10,
    },
});
