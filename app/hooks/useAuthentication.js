import secureStorage from "../utilities/secureStorage";
import firebase from "firebase";

import { useUser } from "./useUser";

export default useAuthentication = () => {
  const { setUser } = useUser();

  const _updateUser = (uid) => {
    firebase
      .database()
      .ref("/users/" + uid)
      .on("value", (snapshot) => setUser(snapshot.val()));
  };
  const _createUser = async (username, email, image) => {
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

  const logIn = async (email, password, setLoginFailed, setLoading) => {
    try {
      setLoginFailed(false);

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((current) => {
          secureStorage.storeUser({ email, password });
          _updateUser(current.user.uid);
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

  const register = async (newUser, setRegistrationFailed, setLoading) => {
    const { username, email, password, image } = newUser;

    try {
      setRegistrationFailed(false);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((current) => {
          _createUser(username, email, image).then(() => {
            secureStorage.storeUser({ email, password });
            _updateUser(current.user.uid);
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

  return { logIn, logOut, register };
};
