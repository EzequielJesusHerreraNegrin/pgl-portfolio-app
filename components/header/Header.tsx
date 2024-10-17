import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type headerPropsTypes = {
  setDisplayMyQR: Function;
};

const Header = ({ setDisplayMyQR }: headerPropsTypes) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.firstHeaderContainer}>My Portfolio App</Text>
      <View style={styles.secondHeaderContainer}>
        <Pressable
          style={styles.buttonBox}
          onPress={() => setDisplayMyQR(true)}
          accessibilityLabel="Un botón pal QR"
        >
          <Text style={styles.shadowedBox}>Conóceme</Text>
        </Pressable>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title="Mi Repo"
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firstHeaderContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  secondHeaderContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBox: {
    width: "40%",
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
