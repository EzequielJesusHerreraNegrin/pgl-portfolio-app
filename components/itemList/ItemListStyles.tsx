import { StyleSheet } from "react-native";

export function itemListStyles(someBoolean: boolean) {
    const darkBackgorund = "#697477";
    const brightBackgorund = "#ddc57d";

    const darkListItemBorder = "#2A3B47";
    const brightListItemBorder = "#332e1d";

    const darkListItemBackgrund = "#1083D6";
    const brightListItemBackgrund = "#efeba9";

    const styles = StyleSheet.create({
        listItem: {
            marginTop: 10,
            borderColor: "black",
            borderWidth: 1,
            borderStyle: "dashed",
            padding: 20,
            color: someBoolean ? brightListItemBorder : darkListItemBorder,
            textAlign: "center",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: 16,
            backgroundColor: someBoolean ? brightListItemBackgrund : darkListItemBackgrund,
        },
        listContainer: {
            backgroundColor: someBoolean ? brightBackgorund : darkBackgorund,
            padding: 10,
            borderRadius: 10,
        }
    });
    return styles
}
