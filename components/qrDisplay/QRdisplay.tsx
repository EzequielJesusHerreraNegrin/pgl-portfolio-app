import React from "react";
import { View, ImageBackground } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { qrDisplayPropsTypes } from "../../Types/Props";
import { qrDisplayStyles } from "./QRdisplayStyles";

const QRdisplay = ({ opacityMode }: qrDisplayPropsTypes) => {
  return (
    <View style={qrDisplayStyles(opacityMode).body}>
      <ImageBackground
        source={
          opacityMode
            ? require("../../assets/lofiWorking.gif")
            : require("../../assets/space.webp")
        }
        style={qrDisplayStyles(opacityMode).imageBackground}
      >
        <View style={qrDisplayStyles(opacityMode).centerQRcode}>
          <QRCode value="https://github.com/adhernea" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default QRdisplay;
