import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, LogBox, View } from "react-native";
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
  const [url, setUrl] = useState();

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

    // let ref = firebase.storage().ref("/listings/-MWnTVF3zJCY2nx-34WJ");
    // ref.getDownloadURL().then((url) => setUrl(url));
  };

  useEffect(() => {
    if (!firebase.app.length) initFirebase();
  }, []);

  const authUser = async () => {
    const result = await secureStorage.readUser();
    if (!result) return;

    const user = JSON.parse(result);
    setUser(user);

    initFirebase();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password);
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
    // <View
    //   style={{ width: "100%", height: "50%", backgroundColor: "lightgrey" }}
    // >
    //   <Image source={{ uri: url }} style={{ width: "100%", height: "100%" }} />
    // </View>
    <StateProvider user={user} setUser={setUser}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <WelcomeNavigator />}
      </NavigationContainer>
    </StateProvider>
  );
}
