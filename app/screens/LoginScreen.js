import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";
import * as yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";
import ListingScreen from "./ListingScreen";
import FormTextInput from "../components/FormTextInput";

const valiadationRules = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).max(16).label("Password"),
});

function RegisterScreen({ onPressBack }) {
  const config = {
    velocityThreshold: 0.8,
    directionalOffsetThreshold: 80,
  };

  const [loginTapped, setLoginTapped] = useState(false);

  return (
    <>
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

        <ScrollView>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={() => setLoginTapped(true)}
            validationSchema={valiadationRules}
          >
            {({ handleSubmit }) => (
              <View style={styles.textInputContainer}>
                <FormTextInput
                  title="email"
                  iconName="email"
                  width="90%"
                  placeholder="Email"
                  style={styles.textInput}
                />

                <FormTextInput
                  title="password"
                  iconName="lock"
                  width="90%"
                  placeholder="Password"
                  secureTextEntry
                  style={styles.textInput}
                />

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
        </ScrollView>
      </GestureRecognizer>
      <Modal visible={loginTapped}>
        <ListingScreen />
      </Modal>
    </>
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
    alignItems: "center",
  },
  signupIconsContainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  textInput: {
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderBottomColor: colors.dodgerblue,
    marginTop: 10,
    borderRadius: 0,
  },
});

export default RegisterScreen;
