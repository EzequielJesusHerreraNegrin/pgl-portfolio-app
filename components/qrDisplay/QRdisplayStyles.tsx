import { StyleSheet } from "react-native";

export function qrDisplayStyles(someBoolean: boolean) {
    const darkListItemBorder = "#2A3B47";
    const brightListItemBorder = "#332e1d";

    const styles = StyleSheet.create({
        body: {
            width: "100%",
            borderWidth: 5,
            borderColor: someBoolean ? brightListItemBorder : darkListItemBorder,
            alignItems: "center",
            justifyContent: "space-between",
            height: "85%",
        },
        centerQRcode: {
            backgroundColor: "",
            zIndex: 99,
            justifyContent: "center",
            borderWidth: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
        },
        imageBackground: {
            width: 375,
            height: 675,
        },
    });
    return styles;
}
