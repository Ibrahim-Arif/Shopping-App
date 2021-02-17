import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
      {/* <WelcomeNavigator /> */}
    </NavigationContainer>
  );
}

// initialParam={{
//   title: "Ibrahim Arif",
//   description: "some description here",
//   image: require("./app/assets/user.jpg"),
// }}
