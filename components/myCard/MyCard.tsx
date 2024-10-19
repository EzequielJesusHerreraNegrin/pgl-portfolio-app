import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const MyCard = () => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center", paddingTop: 10 }}>
      <Image
        style={styles.avatar}
        source={require("../../assets/SofyanAmrabat.jpg")}
      ></Image>
      <View
        style={styles.infoItemInfo}
      >
        <Text
          style={styles.infoItemTitle}
        >
          Descripción sobre mí!
        </Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  infoItemInfo: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  infoItemTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  }
});

export default MyCard;
