import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  backgroundColor,
  color = "#fff",
  IconComponent,
  iconSize = null,
  size = 40,
  image,
  imageSize = size,
  name,
  onPress = null,
  style,
  text,
  textStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            alignItems: "center",
            backgroundColor: backgroundColor,
            borderRadius: size / 2,
            height: size,
            justifyContent: "center",
            width: size,
          },
          style,
        ]}
      >
        {name && (
          <MaterialCommunityIcons
            name={name}
            size={iconSize ? iconSize : size * 0.7}
            color={color}
          />
        )}
        {IconComponent}
        {image && (
          <Image
            source={image}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: size / 2,
            }}
          />
        )}
      </View>
      {text && (
        <Text
          style={[
            {
              alignSelf: "center",
              color: "#000",
              fontSize: 16,
              textTransform: "capitalize",
              marginTop: 5,
            },
            textStyle,
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Icon;
