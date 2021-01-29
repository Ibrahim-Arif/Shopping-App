import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";

import colors from "../config/colors";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";

function LoginScreen({ onPressBack }) {
  const config = {
    velocityThreshold: 0.8,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      style={[styles.container]}
      config={config}
      onSwipeDown={() => onPressBack(false)}
    >
      <View style={styles.topContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={colors.white}
          style={{ marginLeft: 10 }}
          onPress={() => onPressBack(false)}
        />
        <Text style={styles.topText}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <MyTextInput
          placeholder="Username"
          style={{
            width: "90%",
            backgroundColor: colors.white,
            borderBottomWidth: 3,
            borderBottomColor: colors.dodgerblue,
          }}
        />
        <MyTextInput
          placeholder="Email"
          style={{
            width: "90%",
            backgroundColor: colors.white,
            borderBottomWidth: 3,
            borderBottomColor: colors.dodgerblue,
            marginTop: 10,
          }}
        />
        <MyTextInput
          placeholder="Password"
          secureTextEntry
          style={{
            width: "90%",
            backgroundColor: colors.white,
            borderBottomWidth: 3,
            borderBottomColor: colors.dodgerblue,
            marginTop: 10,
          }}
        />

        <MyButton
          title="create account"
          color={colors.dodgerblue}
          style={{ width: "80%", alignSelf: "center", marginTop: 25 }}
        />
      </View>

      <View style={styles.signupIconsContainer}>
        <Text style={styles.orText}>Or sign up with</Text>
        <View style={styles.signupIcons}>
          <Icon
            name="google"
            onPress={() => null}
            backgroundColor={colors.primary}
          />
          <Icon
            name="facebook"
            onPress={() => null}
            backgroundColor={colors.facebook}
            iconSize={32}
          />
          <Icon
            name="twitter"
            onPress={() => null}
            backgroundColor={"#2294BD"}
            iconSize={32}
          />
        </View>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topText: {
    fontSize: 45,
    color: colors.white,
    marginLeft: 20,
  },
  topContainer: {
    height: "30%",
    justifyContent: "space-between",
    paddingVertical: 30,
    backgroundColor: colors.dodgerblue,
  },

  orText: {
    fontSize: 20,
    color: colors.darkgrey,
    marginBottom: 10,
  },
  signupIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "40%",
  },
  textInputContainer: {
    height: "50%",
    justifyContent: "center",
  },
  signupIconsContainer: {
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
    height: "20%",
  },
});

export default LoginScreen;
