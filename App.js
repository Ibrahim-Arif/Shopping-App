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

const logIn = async (email, password, setLoginFailed, setUser) => {
  try {
    setLoginFailed(false);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((current) => {
        firebase
          .database()
          .ref("/users/" + current.user.uid)
          .on("value", (snapshot) => {
            const user = {
              ...snapshot.val(),
              image:
                "https://firebasestorage.googleapis.com/v0/b/dawn-bcee8.appspot.com/o/user.jpg?alt=media&token=3ecf406b-e0ef-4856-9844-d371c0fc2436",
            };

            setUser(user);
          });
      })
      .catch(() => setLoginFailed(true));
  } catch (error) {
    console.log(error);
  }
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState();
  const [loginFailed, setLoginFailed] = useState(false);

  LogBox.ignoreLogs(["Setting a timer for a long period of time,"]);

  const initFirebase = () => {
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

  useEffect(() => {
    if (!firebase.app.length) initFirebase();
  }, []);

  const authUser = async () => {
    initFirebase();
    const result = await secureStorage.readUser();
    if (!result) return;
    const parsed = JSON.parse(result);

    // initializing user with minimun value so that
    // home screen will come without delay
    // then logging in and again initializing with complete user info
    setUser(parsed);

    logIn(parsed.email, parsed.password, setLoginFailed, setUser);

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
