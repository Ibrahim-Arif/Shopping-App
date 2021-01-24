import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function ImageDetailScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.iconView}>
        <TouchableOpacity style={styles.buttonView}>
          <Ionicons name="arrow-back-sharp" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonView}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
  buttonView: {
    top: "10%",
  },
});
