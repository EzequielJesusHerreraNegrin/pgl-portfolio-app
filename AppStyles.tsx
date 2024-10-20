import { StyleSheet } from "react-native";

export function appStyles(someBoolean: boolean) {
    const darkBackgorund = "#1a1a10";
    const brightBackgorund = "#eab676";

    const darkListItemBorder = "#2A3B47";
    const brightListItemBorder = "#332e1d";

    const darkListItemBackgrund = "#1083D6";
    const brightListItemBackgrund = "#efeba9";
    
    const darkText_Title = "#fff";
    const brightText_Title = "#000";

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: someBoolean ? brightBackgorund : darkBackgorund,
            alignItems: "center",
            justifyContent: "center",
        },
        bodystails: {
            width: "100%",
            borderWidth: 4,
            borderColor: someBoolean ? brightListItemBorder : darkListItemBorder,
            alignItems: "center",
            justifyContent: "space-between",
            height: "85%",
        },
        listTitle: {
            color: someBoolean ? brightText_Title : darkText_Title,
            fontWeight: "900",
            textTransform: "capitalize",
            fontSize: 20,
            textAlign: "center",
        },
    });
    return styles
}