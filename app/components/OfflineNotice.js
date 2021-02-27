import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";

function OfflineNotice({}) {
  const netInfo = useNetInfo();

  return netInfo.type !== "unknown" && netInfo.isInternetReachable === false ? (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OfflineNotice;
