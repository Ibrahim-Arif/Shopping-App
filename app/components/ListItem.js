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

function ListItem({
  title,
  description,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={"#E7E9E9"}
        onPress={onPress}
        activeOpacity={0.2}
      >
        <View style={[styles.container, style]}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}

          <View style={styles.containerText}>
            <Text style={[styles.text]}>{title}</Text>

            {description && (
              <Text style={[styles.text, { color: "#918C8C", fontSize: 16 }]}>
                {description}
              </Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
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
});

export default ListItem;
