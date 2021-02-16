import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import ImageDetailScreen from "./app/screens/ImageDetailScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ListingEditingScreen from "./app/screens/ListingEditingScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessageScreen from "./app/screens/MessageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const FeedStack = createStackNavigator();
const FeedNavigtor = () => (
  <FeedStack.Navigator initialRouteName="Home">
    <FeedStack.Screen name="Welcome" component={WelcomeScreen} />
    <FeedStack.Screen name="Home" component={ListingScreen} />
    <FeedStack.Screen name="ListingDetail" component={ListingDetailScreen} />
    <FeedStack.Screen name="ImageDetail" component={ImageDetailScreen} />
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
        tabBarIcon: ({ size, color }) => (
          <Feather name="plus" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
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

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

// initialParam={{
//   title: "Ibrahim Arif",
//   description: "some description here",
//   image: require("./app/assets/user.jpg"),
// }}
