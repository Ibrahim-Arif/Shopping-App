// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}

      {/* <Card
        img={require("./app/assets/couch.jpg")}
        description="Comfortable couce with pillows!"
        price="600"
      />
      <Card
        img={require("./app/assets/jacket.jpg")}
        description="Red jacket for sale"
        price="250"
      /> */}

      <MessageScreen />

      {/* <ListingDetailScreen /> */}
      {/* <ImageDetailScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: colors.lightgrey,
    // padding: 20,
    // paddingTop: 40,

    // alignItems: "center",
    // justifyContent: "center",
  },
});
