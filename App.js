import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
        {/* <WelcomeNavigator /> */}
      </NavigationContainer>
    </>
  );
}
