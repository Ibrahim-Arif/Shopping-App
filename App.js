import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";
import { StateProvider } from "./app/components/userContext";
import secureStorage from "./app/utilities/secureStorage";
import users from "./app/config/users";

export default function App() {
  const [user, setUser] = useState();

  const authUser = async () => {
    const result = await secureStorage.readUser();
    if (!result) return;
    setUser(JSON.parse(result));
  };

  useEffect(() => {
    authUser();
  }, []);

  return (
    <StateProvider user={user} setUser={setUser}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <WelcomeNavigator />}
      </NavigationContainer>
    </StateProvider>
  );
}
