import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import MyButton from "./app/components/MyButton";
import Card from "./app/components/card";
import colors from "./app/config/colors";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ImageDetailScreen /> */}
      <WelcomeScreen />
      {/* <MyButton title="ibrahim" /> */}

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

      {/* <ListingDetailScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.lightgrey,
    // padding: 20,
    // paddingTop: 40,
    // justifyContent: "center",
    // alignSelf: "center",
  },
});
