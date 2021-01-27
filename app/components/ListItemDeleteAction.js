import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={32}
          color={"#fff"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ff5252",
    justifyContent: "center",
    width: 70,
  },
});

export default ListItemDeleteAction;
