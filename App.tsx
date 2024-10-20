import { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "./components/header/Header";
import QRdisplay from "./components/qrDisplay/QRdisplay";
import MyCard from "./components/myCard/MyCard";
import ItemList from "./components/itemList/ItemList";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR}></Header>
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <MyCard></MyCard>
            <Text style={styles.listTitle}>cosas que me gustan mucho:</Text>
            <ScrollView>
              <ItemList></ItemList>
            </ScrollView>
          </View>
        </View>
      ) : (
        <QRdisplay></QRdisplay>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  listTitle: {
    color: "veryblack",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});