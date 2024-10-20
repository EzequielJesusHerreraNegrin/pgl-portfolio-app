import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

type headerPropsTypes = {
  setDisplayMyQR: Function;
};

const Header = ({ setDisplayMyQR }: headerPropsTypes) => {
  

  return (
    <View style={styles.headerContainer}>
      
      <Text style={styles.firstHeaderContainer}>My Portfolio App</Text>
      <View style={styles.secondHeaderContainer}>
        <Button      
        title="Conóceme"
        color={"#9adcb9"}
        onPress={() => setDisplayMyQR(true)}>
      </Button>
        <Button      
        title="MI REPO"
        color={"#9adcb9"}
        onPress={() => setDisplayMyQR(false)}>
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#5ac7aa",
    height: "15%",
    paddingTop: 40,
    width: "100%",
  },
  firstHeaderContainer: {
    backgroundColor: "#5ac7aa",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    bottom: 10,
  },
  secondHeaderContainer: {
    gap: 30,
    flexDirection: "row",
    backgroundColor: "#5ac7aa",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBox: {
    marginLeft: 30,
    marginRight: 30,
    padding: 7,
    backgroundColor: "#9adcb9",
    width: "auto",
  },
  shadowedBox: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#000",
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
