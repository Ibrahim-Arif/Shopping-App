import React from "react";
import { View, StyleSheet } from "react-native";

function Seperator({ style }) {
  return <View style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#E7E9E9",
    height: 2,
    width: "95%",
  },
});

export default Seperator;
