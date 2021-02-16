import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const stack = createStackNavigator();
const WelcomeNavigator = () => (
  <stack.Navigator screenOptions={{ headerShown: false }}>
    <stack.Screen name="Welcome" component={WelcomeScreen} />
    <stack.Screen name="Login" component={LoginScreen} />
    <stack.Screen name="Register" component={RegisterScreen} />
  </stack.Navigator>
);

export default WelcomeNavigator;
