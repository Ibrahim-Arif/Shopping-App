import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";

import MyButton from "../components/MyButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.container}
      source={require("../assets/TekBilgin.png")}
    >
      <Text style={[styles.text, styles.topText]}>{"Welcome to \nDawn"}</Text>

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/welcomeLogo.png")}
        />
        <Text
          style={[styles.text, { color: colors.white, paddingVertical: 10 }]}
        >
          Sell what you don't need
        </Text>
      </TouchableOpacity>

      <View style={styles.signButtonView}>
        <MyButton
          title="register"
          color={colors.dodgerblue}
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderRadius: 15,
          }}
          onPress={() => Alert.alert("Alert!", "Register tapped!")}
        />
        <MyButton
          title="sign-in"
          color={colors.primary}
          style={{
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            borderRadius: 5,
          }}
          onPress={() => Alert.alert("Alert!", "Sign-In tapped!")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  logoContainer: {
    alignSelf: "center",
    position: "absolute",
    top: "25%",
  },

  logo: {
    alignSelf: "center",
    borderWidth: 6,
    borderColor: colors.white,
    borderRadius: 55,
    height: 110,
    width: 110,
  },

  signButtonView: {
    height: "18%",
    width: "90%",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },

  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: colors.primary,
    textTransform: "capitalize",
  },

  topText: {
    fontSize: 34,
    left: 10,
    position: "absolute",
    top: "8%",
  },
});
