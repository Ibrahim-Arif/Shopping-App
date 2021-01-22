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
      <StatusBar style="auto" />
      <View style={styles.imageView}>
        <ImageBackground
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
          source={require("./assets/TekBilgin.png")}
        >
          <View
            style={{
              width: "100%",
              height: "20%",
              // backgroundColor: "orange",
              justifyContent: "center",
              alignItems: "flex-start",
              top: "5%",
            }}
          >
            <Text style={[styles.text, { fontSize: 40, left: 10 }]}>
              {"Welcome to \nDawn"}
            </Text>
          </View>
          <View style={{ top: "7%", alignItems: "center" }}>
            <Image
              style={{
                width: 110,
                height: 110,
                borderWidth: 6,
                borderColor: "#fff",
                borderRadius: 50,
              }}
              source={require("./assets/welcomeLogo.png")}
            />
            <Text style={{ fontSize: 20, color: "#fff" }}>
              Sell what you don't need
            </Text>
          </View>

          <View style={styles.signButtonView}>
            <View style={styles.buttonView}>
              <Text style={styles.text}>Sign-Up button</Text>
            </View>

            <View style={styles.buttonView}>
              <Text style={styles.text}>Sign-In button</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
  },

  imageView: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonView: {
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },

  signButtonView: {
    width: "100%",
    height: "20%",
    top: "42%",
    justifyContent: "space-evenly",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  text: {
    fontSize: 20,
    color: "red",
  },
});
