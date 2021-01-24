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
      source={require("../assets/background1.jpg")}
    >
      <Text style={[styles.topText, { fontSize: 28 }]}>
        {"Welcome to \n"}
        <Text style={[styles.topText, { fontSize: 48 }]}>{"Dawn"}</Text>
      </Text>

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
          color={colors.secondary}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  logoContainer: {
    alignSelf: "center",
    position: "absolute",
    top: "36%",
  },

  logo: {
    alignSelf: "center",
    height: 100,
    width: 100,
  },

  signButtonView: {
    height: "20%",
    width: "90%",
    bottom: 20,
    justifyContent: "space-evenly",
    alignSelf: "center",
  },

  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  topText: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: colors.secondary,
    left: 10,
    position: "absolute",
    top: "14%",
  },
});

export default WelcomeScreen;
