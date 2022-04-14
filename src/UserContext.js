import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);

  const addUser = () => {
    console.log("sign in");
  };

  return (
    <UserContext.Provider value={{ userDetails, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider};
export default UserContext;
