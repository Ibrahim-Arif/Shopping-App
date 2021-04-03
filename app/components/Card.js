import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

function Card({ imageUrl, description, price, onPress, thumbnailUrl }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
        preview={{ uri: thumbnailUrl }}
      />
      {description && <Text style={styles.text}>{description}</Text>}
      <Text style={[styles.text, styles.price]}>{"$" + price}</Text>
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
    paddingLeft: 20,
    paddingVertical: 2,
  },
  price: {
    color: "#4ecdc4",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Card;
