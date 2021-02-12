import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Back({ color, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Ionicons name="chevron-back-outline" size={24} color={color} />
      <Text style={[styles.text, { color: color }]}>BACK</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Back;
