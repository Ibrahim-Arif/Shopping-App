import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

function ListItem({
  title,
  description,
  image,
  onPress,
  renderRightActions,
  style = null,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
        <View style={[style, styles.container]}>
          <Image style={styles.image} source={image} />

          <View style={styles.containerText}>
            <Text style={[styles.text]}>{title}</Text>

            <Text
              style={[styles.text, { color: colors.darkgrey, fontSize: 16 }]}
            >
              {description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 14,
    paddingVertical: 5,
  },
  containerText: {
    marginLeft: 14,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});

export default ListItem;
