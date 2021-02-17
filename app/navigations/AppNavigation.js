import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditingScreen from "../screens/ListingEditingScreen";
import FeedNavigtor from "./FeedNavigation";
import colors from "../config/colors";
import AccountNavigator from "./AccountNavigation";
import Icon from "../components/Icon";

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
      options={({ navigation }) => ({
        tabBarButton: () => (
          <Icon
            name="plus-circle"
            size={65}
            backgroundColor={colors.primary}
            onPress={() => navigation.navigate("Add")}
            style={{ bottom: 15, borderColor: colors.white, borderWidth: 7 }}
          />
        ),
        title: "",
      })}
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

export default AppNavigator;
