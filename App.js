import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MyPicker from "./app/components/MyPicker";

export default function App() {
  const [catagory, setCatagory] = useState("Catagory");

  const catagories = [
    {
      title: "furniture",
      id: 1,
    },
    {
      title: "clothing",
      id: 2,
    },
    {
      title: "camera",
      id: 3,
    },
    {
      title: "glasses",
      id: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <WelcomeScreen />

      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* 
      <MyPicker
        title={catagory}
        icon="apps"
        items={catagories}
        onPress={setCatagory}
      /> */}

      {/* <MessageScreen /> */}

      {/* <AccountScreen /> */}

      {/* <ListingScreen /> */}

      {/* <ListingDetailScreen /> */}
      {/* <ImageDetailScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: 100,
    // backgroundColor: colors.lightgrey,
    // padding: 20,
    // paddingTop: 40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
