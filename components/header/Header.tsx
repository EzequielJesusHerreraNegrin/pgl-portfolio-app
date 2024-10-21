import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { headerStyles } from "./HeaderStyles";
import { headerPropsTypes } from "../../Types/Props";

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
          color={opacityMode ? "#9adcb9" : "#697477"}
          onPress={() => setDisplayMyQR(true)}
        />
        <Button
          title="MI REPO"
          color={opacityMode ? "#9adcb9" : "#697477"}
          onPress={() => setDisplayMyQR(false)}
        />
        <Pressable onPress={() => setOpacityMode(!opacityMode)}>
          <Text style={headerStyles(opacityMode).opacityButton}>{opacityMode ? "Dark" : "Bright"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
