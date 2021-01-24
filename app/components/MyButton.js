import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

import colors from "../config/colors";

function MyButton({ title, onPress, style, titleStyle, color = "#000" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "capitalize",
  },
});

export default MyButton;
