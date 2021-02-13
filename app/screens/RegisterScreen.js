import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";
import * as yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";
import FormTextInput from "../components/FormTextInput";
import { useNavigation } from "@react-navigation/native";

const valiadationRules = yup.object().shape({
  username: yup.string().required().label("Username"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).max(16).label("Password"),
});

function RegisterScreen({ onPressBack }) {
  const navigation = useNavigation();

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

      <ScrollView>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={() => {
            navigation.navigate("Home");
            onPressBack(false);
          }}
          validationSchema={valiadationRules}
        >
          {({ handleSubmit }) => (
            <View style={styles.textInputContainer}>
              <FormTextInput
                title="username"
                iconName="account"
                placeholder="Username"
                width="90%"
                style={styles.textInput}
              />
              <FormTextInput
                title="email"
                iconName="email"
                placeholder="Email"
                width="90%"
                style={styles.textInput}
              />
              <FormTextInput
                title="password"
                iconName="lock"
                placeholder="Password"
                width="90%"
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
      </ScrollView>
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
    alignItems: "center",
    height: 350,
    justifyContent: "center",
  },
  signupIconsContainer: {
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
  },
  textInput: {
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    marginTop: 5,
    borderRadius: 0,
  },
});

export default RegisterScreen;
