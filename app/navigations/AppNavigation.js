import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import ListingEditingScreen from "../screens/ListingEditingScreen";
import FeedNavigtor from "./FeedNavigation";
import colors from "../config/colors";
import AccountNavigator from "./AccountNavigation";

const Tabs = createBottomTabNavigator();
const AppNavigator = () => (
  <Tabs.Navigator initialRouteName="Feeds">
    <Tabs.Screen
      name="Feeds"
      component={FeedNavigtor}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Add"
      component={ListingEditingScreen}
      options={{
        tabBarIcon: ({ size }) => (
          <View style={styles.addIcon}>
            <AntDesign name="pluscircle" size={size + 10} color="#fff" />
          </View>
        ),
        title: "",
      }}
    />
    <Tabs.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const styles = StyleSheet.create({
  addIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppNavigator;
