import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  backgroundColor = "#000",
  color = "#fff",
  name,
  onPress,
  size = 40,
  iconSize,
}) {
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
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name={name}
          size={iconSize ? iconSize : size * 0.7}
          color={color}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Icon;
