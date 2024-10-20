import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { qrDisplayPropsTypes } from "../../Types/Props";
import { qrDisplayStyles } from "./QRdisplayStyles";
// Intentar gif variable en el fondo

const QRdisplay = ({
  opacityMode,
}: qrDisplayPropsTypes) => {

  return (
    <View style={qrDisplayStyles(opacityMode).bodystails}>
        <ImageBackground 
          source={opacityMode ? require('../../assets/lofiWorking.gif') : require('../../assets/space.webp')}  
          style={qrDisplayStyles(opacityMode).ImageBackground}
        >
        <View style={qrDisplayStyles(opacityMode).CentrarcodigoQR}>
          <QRCode value="https://github.com/adhernea" />
        </View>
        </ImageBackground>
    </View>
  );
};

export default QRdisplay;
