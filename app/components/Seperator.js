import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function Seperator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: colors.lightgrey,
    height: 2,
    width: "95%",
  },
});

export default Seperator;
