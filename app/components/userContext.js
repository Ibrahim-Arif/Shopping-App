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

  const createUser = async (username, email) => {
    try {
      const uid = firebase.auth().currentUser.uid;

      firebase
        .database()
        .ref(`/users/` + uid)
        .set({
          username,
          email,
          image: "../assets/user.jpg",
          messages: {},
          listings: {},
        });
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (username, email, password, setRegistrationFailed) => {
    try {
      setRegistrationFailed(false);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          createUser(username, email);

          secureStorage.storeUser({ username, email, password, image });
          setUser({ username, email, password, image });
        })
        .catch(() => setRegistrationFailed(true));
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
