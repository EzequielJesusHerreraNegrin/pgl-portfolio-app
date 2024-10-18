import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Header from "./components/header/Header";
import QRdisplay from "./components/qrDisplay/QRdisplay";
import MyCard from "./components/myCard/MyCard";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR}></Header>
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <MyCard></MyCard>
            <Text
              style={{
                color: "beriblak",
                fontWeight: "900",
                textTransform: "capitalize",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              cosas que me gustan mucho:
            </Text>
            <ScrollView style={{ padding: 10 }}>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Salir a pasear
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Senderismo</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Ir a la playita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Domingos de misa
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                La guitarrita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                El monte con lluvia
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Música variadita
              </Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Anime</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ducharme</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Videojuegos</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>
                Ir de cenar romántica
              </Text>
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
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});
