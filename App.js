import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";
import { StateProvider } from "./app/components/userContext";
import secureStorage from "./app/utilities/secureStorage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const authUser = async () => {
    const result = await secureStorage.readUser();
    if (!result) return;
    setUser(JSON.parse(result));
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={authUser}
        onFinish={() => setIsReady(true)}
        onError={console.log('')}
      />
    );
  }

  return (
    <StateProvider user={user} setUser={setUser}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <WelcomeNavigator />}
      </NavigationContainer>
    </StateProvider>
  );
}
