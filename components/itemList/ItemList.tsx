import React from "react";
import { Text, View } from "react-native";
import { myCardPropsTypes } from "../../Types/Props";
import { itemListStyles } from "./ItemListStyles";

const ItemList = ({
    opacityMode,
}: myCardPropsTypes) => {
    return (
        <View>
            <View style={itemListStyles(opacityMode).listContainer}>
                <Text style={itemListStyles(opacityMode).listItem}>Salir a pasear</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Ver Anime</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Hacer Chuletadas</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Domingos de pelis</Text>
                <Text style={itemListStyles(opacityMode).listItem}>La Saxofonista</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Amaneceres</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Viajar</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Música que no sea regueton</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Tecnología</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Entrenar</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Videojuegos</Text>
                <Text style={itemListStyles(opacityMode).listItem}>Cenar con Amigos</Text>
            </View>
        </View>
    );
};

export default ItemList;