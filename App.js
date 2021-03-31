import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import firebase from "firebase";
import _ from "lodash";

import NavigationTheme from "./app/navigations/NavigationTheme";
import WelcomeNavigator from "./app/navigations/WelcomeNavigator";
import AppNavigator from "./app/navigations/AppNavigation";
import { StateProvider } from "./app/hooks/useUser";
import secureStorage from "./app/utilities/secureStorage";

const _logIn = (email, password, setLoginFailed, setUser) => {
  try {
    setLoginFailed(false);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((current) => {
        firebase
          .database()
          .ref("/users/" + current.user.uid)
          .on("value", (snapshot) => setUser(snapshot.val()));
      })
      .catch(() => {
        setUser(null);
        secureStorage.removeUser();
        setLoginFailed(true);
      });
  } catch (error) {
    setUser(null);
    secureStorage.removeUser();
    setLoginFailed(true);
    console.log(error);
  }
};

const firebaseConfig = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyC2EAH4qe28zaaZQ6AWq8jW0mdSafYyids",
    authDomain: "dawn-bcee8.firebaseapp.com",
    databaseURL: "https://dawn-bcee8-default-rtdb.firebaseio.com",
    projectId: "dawn-bcee8",
    storageBucket: "dawn-bcee8.appspot.com",
    messagingSenderId: "816524272637",
    appId: "1:816524272637:web:48c96805b9ebb8484baf94",
  });
};

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  LogBox.ignoreLogs([
    "Setting a timer for a long period of time",
    // "Cannot connect to the Metro server.",
  ]);

  useEffect(() => {
    if (!firebase.app.length) firebaseConfig();
  }, []);

  const authUser = async () => {
    firebaseConfig();
    const result = await secureStorage.readUser();
    if (!result) return;
    const parsed = JSON.parse(result);

    // initializing user with minimun value
    // so that home screen will come without delay
    // then logging in and again initializing with complete user info
    setUser(parsed);
    _logIn(parsed.email, parsed.password, setLoginFailed, setUser);

    if (loginFailed) return alert("Session Time out");
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
