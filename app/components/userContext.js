import React, { useContext } from "react";
import users from "../config/users";
import secureStorage from "../utilities/secureStorage";

const UserContext = React.createContext();

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const logIn = (email, password) => {
    if (users[email].password === password) {
      setUser(users[email]);
      secureStorage.storeUser(users[email]);
      return true;
    }
    return false;
  };

  const logOut = () => {
    setUser(null);
    secureStorage.removeUser();
  };

  return { user, logIn, logOut, setUser };
};

function StateProvider({ children, user, setUser }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { StateProvider, useUser };
