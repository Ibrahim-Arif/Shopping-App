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
      .on("value", (snapshot) => setUser(snapshot.val()));
  };

  const logIn = async (email, password, setLoginFailed, setLoading) => {
    try {
      setLoginFailed(false);

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((current) => {
          secureStorage.storeUser({ email, password });
          updateUser(current.user.uid);
        })
        .catch(() => {
          setLoginFailed(true);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setLoginFailed(true);
    }
  };

  const createUser = async (username, email, image) => {
    try {
      const uid = firebase.auth().currentUser.uid;

      await firebase
        .database()
        .ref(`/users/` + uid)
        .set({
          username,
          email,
          image,
          totalListings: "0",
        });
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (newUser, setRegistrationFailed, setLoading) => {
    const { username, email, password, image } = newUser;

    try {
      setRegistrationFailed(false);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((current) => {
          createUser(username, email, image).then(() => {
            secureStorage.storeUser({ email, password });
            updateUser(current.user.uid);
          });
        })
        .catch(() => {
          setRegistrationFailed(true);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setRegistrationFailed(true);
      setLoading(false);
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
