import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import colors from "../config/colors";

function OfflineNotice({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    top: StatusBar.currentHeight,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
