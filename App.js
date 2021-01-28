// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import MyButton from "./app/components/MyButton";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Seperator from "./app/components/Seperator";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import ListingScreen from "./app/screens/ListingScreen";
import MyTextInput from "./app/components/MyTextInput";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <LoginScreen />

      {/* <Card
        img={require("./app/assets/couch.jpg")}
        description=""
        price="600"
      />
       */}

      {/* <MessageScreen /> */}

      {/* <Icon
        name="trash-can"
        size={60}
        backgroundColor={colors.dodgerblue}
        color={colors.white}
      /> */}

      {/* <MenuItem /> */}

      {/* <MyTextInput
        iconName="email"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        // style={{ width: "90%" }}
      />
      <MyTextInput
        iconName="key"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      />
      <Text>{email}</Text>
      <Text>{password}</Text> */}

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
