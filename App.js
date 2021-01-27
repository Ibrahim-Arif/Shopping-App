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
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}

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

      {/* <AccountScreen /> */}

      <ListingScreen />

      {/* <ListingDetailScreen /> */}
      {/* <ImageDetailScreen /> */}
    </View>
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
