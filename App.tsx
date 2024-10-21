import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Header from "./components/header/Header";
import QRdisplay from "./components/qrDisplay/QRdisplay";
import MyCard from "./components/myCard/MyCard";
import ItemList from "./components/itemList/ItemList";
import { appStyles } from "./AppStyles";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState<boolean>(true);
  const [opacityMode, setOpacityMode] = useState(true)

  return (
    <View style={appStyles(opacityMode).container}>
      <Header setDisplayMyQR={setDisplayMyQR} setOpacityMode={setOpacityMode} opacityMode={opacityMode}></Header>
      {displayMyQR ? (
        <View style={appStyles(opacityMode).bodystails}>
          <View>
            <MyCard opacityMode={opacityMode}></MyCard>
            <Text style={appStyles(opacityMode).listTitle}>cosas que me gustan mucho:</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ItemList opacityMode={opacityMode}></ItemList>
            </ScrollView>
          </View>
        </View>
      ) : (
        <QRdisplay opacityMode={opacityMode}></QRdisplay>
      )}
    </View>
  );
}