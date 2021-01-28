import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";

function LoginScreen(props) {
  return (
    <View style={[styles.container]}>
      <View style={styles.topContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={colors.white}
          style={{ marginLeft: 10 }}
        />
        <Text style={styles.topText}>Sign Up</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textInputContainer}>
          <MyTextInput
            placeholder="Username"
            style={{
              width: "90%",
              backgroundColor: colors.white,
              borderBottomWidth: 3,
              borderBottomColor: colors.dodgerblue,
              marginTop: "6%",
            }}
          />
          <MyTextInput
            placeholder="Email"
            style={{
              width: "90%",
              backgroundColor: colors.white,
              borderBottomWidth: 3,
              borderBottomColor: colors.dodgerblue,
              marginTop: "2%",
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
              marginTop: "2%",
            }}
          />

          <MyButton
            title="create account"
            color={colors.dodgerblue}
            style={{ width: "80%", alignSelf: "center", marginTop: 30 }}
          />
        </View>

        <Text style={styles.orText}>Or sign up with</Text>
        <View style={styles.signupIconsContainer}>
          <Icon
            name="google"
            onPress={() => null}
            backgroundColor={colors.primary}
          />
          <Icon
            name="facebook"
            onPress={() => null}
            backgroundColor={colors.dodgerblue}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.danger,
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
  bottomContainer: {
    justifyContent: "flex-end",
    backgroundColor: colors.white,
    height: "70%",
  },
  orText: {
    bottom: 40,
    fontSize: 20,
    color: colors.darkgrey,
    alignSelf: "center",
  },
  signupIconsContainer: {
    bottom: 30,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "40%",
  },
  textInputContainer: {
    bottom: 80,
  },
});

export default LoginScreen;
