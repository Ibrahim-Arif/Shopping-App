import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

function LoadingScreen({ color = "dodgerblue" }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    opacity: 0.8,
    zIndex: 1,
  },
});

export default LoadingScreen;
