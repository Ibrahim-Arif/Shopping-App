import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";
import { StateProvider } from "./app/components/userContext";

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer theme={NavigationTheme}>
        {/* <AppNavigator /> */}
        <WelcomeNavigator />
      </NavigationContainer>
    </StateProvider>
  );
}
