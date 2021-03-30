import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";
import FormTextInput from "../components/FormTextInput";
import { useUser } from "../components/userContext";
import LoadingScreen from "./LoadingScreen";

const valiadationRules = yup.object().shape({
  username: yup.string().required().label("Username"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).max(16).label("Password"),
});

function RegisterScreen({ navigation }) {
  const { register } = useUser();
  const [loading, setLoading] = useState(false);
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const image =
    "https://firebasestorage.googleapis.com/v0/b/dawn-bcee8.appspot.com/o/user.jpg?alt=media&token=3ecf406b-e0ef-4856-9844-d371c0fc2436";

  const handleSubmit = async (newUser) => {
    setLoading(true);
    register({ ...newUser, image }, setRegistrationFailed, setLoading);
  };

  return (
    <>
      {loading && <LoadingScreen color={colors.secondary} />}
      <View style={styles.topContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={colors.white}
          onPress={() => navigation.navigate("Welcome")}
        />
        <Text style={styles.topText}>Register</Text>
      </View>

      <ScrollView>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={valiadationRules}
        >
          {({ handleSubmit }) => (
            <View style={styles.textInputContainer}>
              {registrationFailed && (
                <Text style={styles.errortext}>{"Email Already Exists."}</Text>
              )}

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errortext: {
    color: colors.danger,
    fontSize: 16,
  },
  topText: {
    fontSize: 45,
    color: colors.white,
  },
  topContainer: {
    height: 150,
    justifyContent: "space-between",
    padding: 10,
    paddingTop: StatusBar.currentHeight,
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
