import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";
import * as yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";
import FormTextInput from "../components/FormTextInput";

const valiadationRules = yup.object().shape({
  username: yup.string().required().label("Username"),
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
        <Text style={styles.topText}>Register</Text>
      </View>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={valiadationRules}
      >
        {({ handleSubmit }) => (
          <View style={styles.textInputContainer}>
            <FormTextInput
              title="username"
              iconName="account"
              placeholder="Username"
              style={styles.textInput}
            />
            <FormTextInput
              title="email"
              iconName="email"
              placeholder="Email"
              style={styles.textInput}
            />
            <FormTextInput
              title="password"
              iconName="lock"
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
            />

            <MyButton
              title="Create Account"
              color={colors.secondary}
              onPress={handleSubmit}
              style={{ width: "80%", alignSelf: "center", marginTop: 25 }}
            />
          </View>
        )}
      </Formik>

      <View style={styles.signupIconsContainer}>
        <Text style={styles.orText}>Or register with</Text>
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
    backgroundColor: colors.secondary,
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
    height: 350,
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
    borderBottomColor: colors.secondary,
    marginTop: 5,
  },
  errortext: {
    color: colors.danger,
    marginLeft: 35,
    fontSize: 15,
    marginTop: -5,
  },
});

export default RegisterScreen;
