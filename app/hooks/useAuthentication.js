import firebase from "firebase";

import { useUser } from "./useUser";
import secureStorage from "../utilities/secureStorage";

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

  const signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);

    // firebase
    //   .auth()
    //   .getRedirectResult()
    //   .then((result) => {
    //     if (result.credential) {
    //       var credential = result.credential;
    //       var token = credential.accessToken;
    //       console.log(credential, token);
    //     }
    //     var user = result.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    //   });
  };

  return { logIn, logOut, register, signInWithGoogle };
};
