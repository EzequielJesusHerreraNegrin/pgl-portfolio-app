import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { myCardStyles } from "./MyCardStyles";
import { myCardPropsTypes } from "../../Types/Props";

const MyCard = ({
  opacityMode,
}: myCardPropsTypes) => {
  return (
    <View style={myCardStyles(opacityMode).myCardContainer}>
      <Image
        style={myCardStyles(opacityMode).avatar}
        source={require("../../assets/mySelf.jpeg")}
      ></Image>
      <View
        style={myCardStyles(opacityMode).infoItemInfo}
      >
        <Text
          style={myCardStyles(opacityMode).infoItemTitle}
        >
          Ezequiel Jesús
        </Text>
        <Text>
          Soy estudiante de Salesianos La Cuesta y en verano trabajo de Bombero forestal.
        </Text>
      </View>
    </View>
  );
};

export default MyCard;
