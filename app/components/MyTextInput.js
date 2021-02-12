import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MyTextInput({
  iconName,
  iconColor = "#918C8C",
  style = null,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={iconColor}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#E7E9E9",
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    padding: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default MyTextInput;
