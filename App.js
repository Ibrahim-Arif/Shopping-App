import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ListingEditingScreen from "./app/screens/ListingEditingScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessageScreen from "./app/screens/MessageScreen";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import NavigationTheme from "./app/navigations/NavigationTheme";
import colors from "./app/config/colors";

const FeedStack = createStackNavigator();
const FeedNavigtor = () => (
  <FeedStack.Navigator initialRouteName="Home">
    <FeedStack.Screen
      name="Home"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <FeedStack.Screen
      name="ListingDetail"
      component={ListingDetailScreen}
      options={{ title: "Details" }}
    />
    <FeedStack.Screen
      name="ImageDetail"
      component={ImageDetailScreen}
      options={{ headerShown: false }}
    />
  </FeedStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountNavigator = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Messages" component={MessageScreen} />
  </AccountStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabNavigator = () => (
  <Tabs.Navigator initialRouteName="Feeds" tabBarOptions={{}}>
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
    {/* <Tabs.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="android-messages"
              size={size}
              color={color}
            />
          ),
        }}
      /> */}
    <Tabs.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tabs.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <TabNavigator />
      {/* <WelcomeNavigator /> */}
    </NavigationContainer>
  );
}

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

// initialParam={{
//   title: "Ibrahim Arif",
//   description: "some description here",
//   image: require("./app/assets/user.jpg"),
// }}
