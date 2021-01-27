import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function Screen({ style, children }) {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default Screen;
