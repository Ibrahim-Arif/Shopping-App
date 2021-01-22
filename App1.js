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

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <View style={styles.buttonView}>
          <Text style={{ fontSize: 30 }}>{"<--"}</Text>
        </View>

        <View style={styles.buttonView}>
          <Text style={{ fontSize: 30 }}>{"-->"}</Text>
        </View>
      </View>

      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("./assets/welcomeImage.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "#fff",
  },
  imageView: {
    width: "100%",
    height: "75%",
    top: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonView: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 40,
  },
});
