import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import secureStorage from "../utilities/secureStorage";

const UserContext = React.createContext();

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const image = require("../assets/user.jpg");

  const logIn = async (email, password, setLoginFailed) => {
    try {
      const value = await AsyncStorage.getItem(email);
      const user = JSON.parse(value);
      if (!user) setLoginFailed(true);

      if (user.password === password) {
        secureStorage.storeUser(user);
        setUser(user);
        return;
      }
      setLoginFailed(true);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (username, email, password) => {
    try {
      const value = await AsyncStorage.getItem(email);
      if (value) return alert("Email already exists.");

      await AsyncStorage.setItem(
        email,
        JSON.stringify({ username, email, password, image })
      );

      secureStorage.storeUser({ username, email, password, image });
      setUser({ username, email, password, image });
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
