import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";
import * as yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";

const valiadationRules = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).max(16).label("Password"),
});

function RegisterScreen({ onPressBack }) {
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
        <Text style={styles.topText}>Login</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={valiadationRules}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <View style={styles.textInputContainer}>
            <MyTextInput
              onChangeText={handleChange("email")}
              iconName="email"
              placeholder="Email"
              style={styles.textInput}
            />
            <Text style={styles.errortext}>{errors.email}</Text>

            <MyTextInput
              onChangeText={handleChange("password")}
              iconName="lock"
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
            />
            <Text style={styles.errortext}>{errors.password}</Text>

            <MyButton
              color={colors.dodgerblue}
              onPress={handleSubmit}
              title="Login"
              style={{ width: "80%", alignSelf: "center", marginTop: 40 }}
            />
          </View>
        )}
      </Formik>

      <View style={styles.signupIconsContainer}>
        <Text style={styles.orText}>Or login with</Text>
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
    height: 150,
    justifyContent: "space-between",
    paddingVertical: 10,
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
    height: 300,
    justifyContent: "center",
  },
  signupIconsContainer: {
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
  },
  textInput: {
    width: "90%",
    backgroundColor: colors.white,
    borderBottomWidth: 3,
    borderBottomColor: colors.dodgerblue,
    marginTop: 10,
  },
  errortext: {
    color: colors.danger,
    marginLeft: 35,
    fontSize: 15,
    marginTop: -5,
  },
});

export default RegisterScreen;
