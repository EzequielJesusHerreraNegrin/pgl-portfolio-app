import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ItemList = () => {
    return (
        <View>
            <View style={styles.listContainer}>
                <Text style={styles.listItem}>Salir a pasear</Text>
                <Text style={styles.listItem}>Senderismo</Text>
                <Text style={styles.listItem}>Ir a la playita</Text>
                <Text style={styles.listItem}>Domingos de misa</Text>
                <Text style={styles.listItem}>La guitarrita</Text>
                <Text style={styles.listItem}>El monte con lluvia</Text>
                <Text style={styles.listItem}>Viajar</Text>
                <Text style={styles.listItem}>Música variadita</Text>
                <Text style={styles.listItem}>Anime</Text>
                <Text style={styles.listItem}>Ducharme</Text>
                <Text style={styles.listItem}>Videojuegos</Text>
                <Text style={styles.listItem}>Ir de cenar romántica</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
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
    listContainer: {
        padding: 10,
    },
});

export default ItemList;