import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

function Card({ img, description, price, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.image}
        source={img}
        resizeMode="cover"
        defaultSource={require("../assets/background1.jpg")}
      />
      <Text style={styles.text}>{description}</Text>
      <Text style={[styles.text, { color: "#4ecdc4" }]}>{"$" + price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingVertical: 2,
  },
});

export default Card;
