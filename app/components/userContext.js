import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import secureStorage from "../utilities/secureStorage";
import firebase from "firebase";

const UserContext = React.createContext();

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const image = require("../assets/user.jpg");

  const logIn = async (email, password, setLoginFailed) => {
    try {
      setLoginFailed(false);
      const user = { email, password, username: "Sample User", image };

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          secureStorage.storeUser(user);
          setUser(user);
        })
        .catch(() => setLoginFailed(true));
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (username, email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          secureStorage.storeUser({ username, email, password, image });
          setUser({ username, email, password, image });
        })
        .catch(() => alert("Something went wrong while Creating account!"));
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    secureStorage.removeUser();
    setUser(null);
  };

  return { user, logIn, logOut, register, setUser };
};

function StateProvider({ children, user, setUser }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { StateProvider, useUser };
