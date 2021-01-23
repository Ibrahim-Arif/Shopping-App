import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";

import MyButton from "../components/MyButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.imageView}
        source={require("../assets/TekBilgin.png")}
      >
        <View
          style={{
            justifyContent: "center",
            top: "10%",
          }}
        >
          <Text style={[styles.text, { fontSize: 34, left: 10 }]}>
            {"Welcome to \nDawn"}
          </Text>
        </View>

        <View style={{ top: "15%", alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={require("../assets/welcomeLogo.png")}
          />
          <Text style={[styles.text, { color: colors.white }]}>
            Sell what you don't need
          </Text>
        </View>

        <View style={styles.signButtonView}>
          <MyButton
            title="register"
            onPress={() => Alert.alert("Alert!", "Register tapped!")}
          />
          <MyButton
            title="sign-in"
            onPress={() => Alert.alert("Alert!", "Sign-In tapped!")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageView: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 110,
    height: 110,
    borderWidth: 6,
    borderColor: colors.white,
    borderRadius: 55,
  },

  signButtonView: {
    height: "20%",
    top: "51%",
    justifyContent: "space-evenly",
  },

  text: {
    fontSize: 20,
    fontFamily: "sans-serif-thin",
    fontWeight: "bold",
    color: colors.primary,
    textTransform: "capitalize",
  },
});
