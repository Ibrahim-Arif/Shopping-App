import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import MyButton from "./app/components/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ImageDetailScreen /> */}
      <WelcomeScreen />
      {/* <MyButton title="ibrahim"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
    // justifyContent: "center",
    // alignSelf: "center",
  },
});
