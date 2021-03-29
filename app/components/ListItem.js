import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";

function ListItem({
  title,
  description,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  rightIcon = false,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, style]}>
          {image && <Image style={styles.image} source={{ uri: image }} />}
          {IconComponent}

          <View style={styles.containerText}>
            <Text numberOfLines={1} style={[styles.text]}>
              {title}
            </Text>

            {description && (
              <Text
                numberOfLines={2}
                style={[styles.text, { color: "#918C8C", fontSize: 16 }]}
              >
                {description}
              </Text>
            )}
          </View>

          {rightIcon && (
            <Entypo
              name="chevron-right"
              style={styles.rightIcon}
              size={24}
              color="#918C8C"
            />
          )}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
  },
  containerText: {
    marginLeft: 14,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  rightIcon: {
    alignSelf: "center",
    marginHorizontal: 6,
  },
});

export default ListItem;
