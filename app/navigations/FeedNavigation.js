import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ImageDetailScreen from "../screens/ImageDetailScreen";

const FeedStack = createStackNavigator();
const FeedNavigtor = () => (
  <FeedStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
    mode="modal"
  >
    <FeedStack.Screen name="Home" component={ListingScreen} />
    <FeedStack.Screen
      name="ListingDetail"
      component={ListingDetailScreen}
      options={{ headerShown: true, headerTransparent: true, title: "" }}
    />
    <FeedStack.Screen name="ImageDetail" component={ImageDetailScreen} />
  </FeedStack.Navigator>
);

export default FeedNavigtor;
