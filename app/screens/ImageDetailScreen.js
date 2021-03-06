import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";

export default function ImageDetailScreen({ route, navigation }) {
  const { imageUrl } = route.params;

  return (
    <Screen style={styles.container}>
      <View style={styles.iconView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}
        >
          <Ionicons name="arrow-back-sharp" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={26}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "75%",
    top: "10%",
  },
});
