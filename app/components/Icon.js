import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ backgroundColor = "#000", color = "#fff", name, size = 40 }) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: backgroundColor,
        borderRadius: size / 2,
        height: size,
        justifyContent: "center",
        width: size,
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.6} color={color} />
    </View>
  );
}

export default Icon;
