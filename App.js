import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import AccountScreen from "./app/screens/AccountScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ListingEditingScreen from "./app/screens/ListingEditingScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import MyPicker from "./app/components/MyPicker";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImagePicker from "./app/components/ImagePicker";
import ImagePickerList from "./app/components/ImagePickerList";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}

      {/* imageItem, imagePicker, imageItemList */}

      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}

      {/* 
      <MyPicker
        title={catagory}
        icon="apps"
        items={catagories}
        onPress={setCatagory}
      /> */}

      {/* <AccountScreen /> */}
      {/* <ImageDetailScreen /> */}
      <ListingEditingScreen />
      {/* <ListingDetailScreen /> */}
      {/* <ListingScreen /> */}
      {/* <MessageScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // top: 100,
    // backgroundColor: colors.lightgrey,
    // padding: 20,
    // paddingTop: 40,
  },
});
