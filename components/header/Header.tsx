import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { headerStyles, secondHeaderContainer } from "./HeaderStyles";

type headerPropsTypes = {
  setDisplayMyQR: Function;
  setOpacityMode: Function;
  opacityMode: boolean;
};

const Header = ({
  setDisplayMyQR,
  setOpacityMode,
  opacityMode,
}: headerPropsTypes) => {
  return (
    <View style={headerStyles(opacityMode).headerContainer}>
      <Text style={headerStyles(opacityMode).headerTitle}>
        My Portfolio App
      </Text>
      <View style={headerStyles(opacityMode).secondHeaderContainer}>
        <Button
          title="Conóceme"
          color={opacityMode ? "#9adcb9" : "#3e7055"}
          onPress={() => setDisplayMyQR(true)}
        />
        <Button
          title="MI REPO"
          color={opacityMode ? "#9adcb9" : "#3e7055"}
          onPress={() => setDisplayMyQR(false)}
        />
        <Pressable onPress={() => setOpacityMode(!opacityMode)}>
          <Text style={headerStyles(opacityMode).opacityButton}>{opacityMode ? "Dark" : "Bright"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

/* const darktStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#000",
    height: "15%",
    paddingTop: 40,
    width: "100%",
  },
}) */

/*   function headerContainer (someBoolean:boolean) {
    const styles = StyleSheet.create({
      conditionalStyle:{
        backgroundColor: someBoolean ? "#5ac7aa" : "#1a1a10",
        color: someBoolean ? "#fff" : "#000",
        height: "15%",
        paddingTop: 40,
        width: "100%",
      }
  });
    return styles
  } */

const brightStyles = StyleSheet.create({
  /*  */
  firstHeaderContainer: {
    backgroundColor: "#5ac7aa",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    bottom: 10,
  },
  secondHeaderContainer: {
    backgroundColor: "#5ac7aa",
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
});

export default Header;
