import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const AccountStack = createStackNavigator();
const AccountNavigator = () => (
  <AccountStack.Navigator screenOptions={{ headerShown: false }}>
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Messages" component={MessageScreen} />
  </AccountStack.Navigator>
);

export default AccountNavigator;
