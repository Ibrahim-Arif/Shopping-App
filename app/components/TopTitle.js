import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Icon from "./Icon";
import Back from "./Back";

function TopTitle({ title, color, rightIcon, onPressBack }) {
  return (
    <View style={styles.container}>
      <Back color={color} onPress={onPressBack} />
      <Text style={[styles.text, { color: color }]}>{title}</Text>
      <Icon color={color} name={rightIcon} size={26} iconSize={26} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default TopTitle;
