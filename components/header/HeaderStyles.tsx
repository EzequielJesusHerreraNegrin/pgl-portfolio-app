import { StyleSheet } from "react-native";

export function headerStyles(someBoolean: boolean) {
  const darkBackgorund = "#1a1a10";
  const brightBackgorund = "#5ac7aa";

  const darkText = "#fff";
  const darkText_Title = "#3e7055";
  const brightText = "#000";

  const darkButton = "#3e7055";
  const brightButton = "#9adcb9";

  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: someBoolean ? brightBackgorund : darkBackgorund,
      height: "15%",
      paddingTop: 40,
      width: "100%",
    },
    headerTitle: {
      backgroundColor: someBoolean ? brightBackgorund : darkBackgorund,
      color: someBoolean ? brightText : darkText_Title,
      textAlign: "center",
      fontWeight: "bold",
      textAlignVertical: "center",
      fontSize: 30,
      bottom: 10,
    },
    secondHeaderContainer: {
      backgroundColor: someBoolean ? brightBackgorund : darkBackgorund,
      gap: 30,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonBox: {
      backgroundColor: "#9adcb9",
      marginLeft: 30,
      marginRight: 30,
      padding: 7,
      width: "auto",
    },
    shadowedBox: {
      color: "white",
      shadowColor: "#000",
      fontWeight: "bold",
      textTransform: "uppercase",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    },
    opacityButton: {
      padding: 8,
      backgroundColor: someBoolean ? brightButton : darkButton,
      color: someBoolean ? brightText : darkText,
    },
  });
  return styles;
}

/* export function firstHeaderContainer(someBoolean: boolean) {
  const styles = StyleSheet.create({
    conditionalStyle: {
      backgroundColor: "#5ac7aa",
      textAlign: "center",
      fontWeight: "bold",
      textAlignVertical: "center",
      fontSize: 30,
      bottom: 10,
    },
  });
  return styles;
} */

export function secondHeaderContainer(someBoolean: boolean) {
  const styles = StyleSheet.create({
    conditionalStyle: {
      backgroundColor: "#5ac7aa",
      gap: 30,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return styles;
}

export function buttonBox(someBoolean: boolean) {
  const styles = StyleSheet.create({
    conditionalStyle: {
      backgroundColor: "#9adcb9",
      marginLeft: 30,
      marginRight: 30,
      padding: 7,
      width: "auto",
    },
  });
  return styles;
}

export function shadowedBox(someBoolean: boolean) {
  const styles = StyleSheet.create({
    conditionalStyle: {
      color: "white",
      shadowColor: "#000",
      fontWeight: "bold",
      textTransform: "uppercase",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    },
  });
  return styles;
}
