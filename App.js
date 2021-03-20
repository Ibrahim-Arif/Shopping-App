import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import firebase from "firebase";

import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";
import { StateProvider } from "./app/components/userContext";
import secureStorage from "./app/utilities/secureStorage";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    firebase.initializeApp({
      apiKey: "AIzaSyC2EAH4qe28zaaZQ6AWq8jW0mdSafYyids",
      authDomain: "dawn-bcee8.firebaseapp.com",
      projectId: "dawn-bcee8",
      storageBucket: "dawn-bcee8.appspot.com",
      messagingSenderId: "816524272637",
      appId: "1:816524272637:web:48c96805b9ebb8484baf94",
    });
  }, []);

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
        onError={console.log("")}
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
