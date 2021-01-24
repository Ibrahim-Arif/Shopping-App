import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

function Card({ img, description, price }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.image}
        source={img}
        defaultSource={require("../assets/background1.jpg")}
      />
      <Text style={styles.text}>{description}</Text>
      <Text style={[styles.text, { color: colors.secondary }]}>
        {"$" + price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
});

export default Card;
