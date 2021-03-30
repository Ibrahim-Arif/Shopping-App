import React, { useContext } from "react";

const UserContext = React.createContext();

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};

function StateProvider({ children, user, setUser }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { StateProvider, useUser };
