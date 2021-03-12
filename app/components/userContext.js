import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import secureStorage from "../utilities/secureStorage";

const UserContext = React.createContext();

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const image = require("../assets/user.jpg");

  const logIn = async (email, password) => {
    try {
      const value = await AsyncStorage.getItem(email);
      const user = JSON.parse(value);

      if (user.password === password) {
        setUser(user);
        secureStorage.storeUser(user);
        return true;
      }
      return false;
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

      alert("Registered successfully. ");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const logOut = () => {
    setUser(null);
    secureStorage.removeUser();
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
