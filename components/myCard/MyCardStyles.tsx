import { StyleSheet } from "react-native";

export function myCardStyles(someBoolean: boolean) {
    const darkBackgorund = "#1a1a10";
    const brightBackgorund = "#5ac7aa";

    const darkText_Title = "#2A3B47";
    const brightText = "#000";

    const darkMyCardInfo = "#1083D6";
    const brightMyCardInfo = "#efeba9";

    const styles = StyleSheet.create({
        avatar: {
            height: 90,
            width: 90,
            borderRadius: 100,
        },
        infoItemInfo: {
            margin: 10,
            backgroundColor: someBoolean ? brightMyCardInfo : darkMyCardInfo,
            padding: 10,
            borderRadius: 10,
            width: "90%",
        },
        infoItemTitle: {
            color: someBoolean ? brightText : darkText_Title,
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
        },
        myCardContainer: {
            backgroundColor: someBoolean ? brightBackgorund : darkBackgorund,
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 10,
        },

    });
    return styles
}
