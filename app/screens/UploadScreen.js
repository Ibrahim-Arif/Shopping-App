import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

function UploadScreen({ progress }) {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={progress} width={200} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    opacity: 0.8,
    zIndex: 1,
  },
});
export default UploadScreen;
