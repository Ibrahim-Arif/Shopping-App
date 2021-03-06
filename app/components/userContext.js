import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const useUser = () => {
  return useContext(UserContext);
};

function StateProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { StateProvider, useUser };
