import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";

function ListItem({ image, itemName, totalListings, style = null }) {
  return (
    <View style={[style, styles.userContainer]}>
      <Image style={styles.userImage} source={image} />

      <View style={styles.userTextContainer}>
        <Text style={[styles.text, { paddingVertical: 0 }]}>{itemName}</Text>

        <Text
          style={[styles.text, { paddingVertical: 0, color: colors.darkgrey }]}
        >
          {totalListings}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    marginLeft: 14,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userTextContainer: {
    marginLeft: 14,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    paddingVertical: 3,
  },
});

export default ListItem;
