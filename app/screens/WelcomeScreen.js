import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Vibration,
} from "react-native";

import MyButton from "../components/MyButton";
import colors from "../config/colors";

const onPressWelcome = () => {
  Alert.alert(
    "Hey there!",
    "You found our secret spot. \nReady for some changes?",
    [
      { text: "always", onPress: () => null },
      { text: "later", onPress: () => null },
    ]
  );
};

const onPressLogo = () => {
  Alert.alert(
    "Why Dawn?",
    "With Dawn, now you don't need to stuck with old things. Sell old and buy new. \n\nGood Luck. ",
    [{ text: "continue", onPress: () => null }]
  );
};

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.container}
      source={require("../assets/background1.jpg")}
    >
      <TouchableWithoutFeedback
        onLongPress={onPressWelcome}
        onPress={() => Vibration.vibrate(80)}
      >
        <View style={styles.textTopContainer}>
          <Text style={[styles.text, { fontSize: 28 }]}>Welcome to</Text>
          <Text style={[styles.text, { fontSize: 48, marginTop: -8 }]}>
            Dawn
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        style={styles.logoContainer}
        activeOpacity={0.5}
        onPress={onPressLogo}
      >
        <Image
          style={styles.logo}
          source={require("../assets/welcomeLogo.png")}
        />
        <Text
          style={[
            styles.text,
            { paddingVertical: 10, textTransform: "capitalize" },
          ]}
        >
          Sell what you don't need
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonView} accessibilityRole="button">
        <MyButton
          title="register"
          color={colors.dodgerblue}
          style={styles.buttonRegister}
          onPress={() => Alert.alert("Alert!", "Register tapped!")}
        />

        <MyButton
          title="sign-in"
          color={colors.secondary}
          style={styles.bottonSignIn}
          onPress={() => Alert.alert("Alert!", "Sign-In tapped!")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonRegister: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderRadius: 15,
  },

  bottonSignIn: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderRadius: 15,
  },

  buttonView: {
    alignSelf: "center",
    bottom: 20,
    height: "20%",
    justifyContent: "space-evenly",
    width: "90%",
  },

  container: {
    backgroundColor: colors.dodgerblue,
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

  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },

  textTopContainer: {
    width: "100%",
    left: 10,
    position: "absolute",
    top: "14%",
  },
});

export default WelcomeScreen;
