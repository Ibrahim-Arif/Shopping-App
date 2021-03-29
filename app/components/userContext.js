import React, { useContext } from "react";
import secureStorage from "../utilities/secureStorage";
import firebase from "firebase";

const UserContext = React.createContext();

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const updateUser = (uid) => {
    firebase
      .database()
      .ref("/users/" + uid)
      .on("value", (snapshot) => {
        const user = {
          ...snapshot.val(),
          image: require("../assets/user.jpg"),
        };

        setUser(user);
      });
  };

  const logIn = async (email, password, setLoginFailed) => {
    try {
      setLoginFailed(false);

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((current) => {
          secureStorage.storeUser({ email, password });
          setUser({ username, email });
          updateUser(current.user.uid);
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
          totalListings: "0",
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
        .then((current) => {
          createUser(username, email);
          secureStorage.storeUser({ email, password });
          setUser({ username, email });
          updateUser(current.user.uid);
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
