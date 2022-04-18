import { createContext, useState } from "react";

import { auth, database } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchDetails = async (uid) => {
    const docRef = doc(database, "users", uid);
    const getUser = await getDoc(docRef);

    setUserDetails(getUser.data());
    console.log(getUser.data());
  };

  const addUser = async (user) => {
    await setDoc(doc(database, "users", user.uid), {
      signedIn: true,
      username: user.username,
      email: user.email,
      uid: user.uid,
    });

    fetchDetails(user.uid);
  };

  const logoutUser = () => {
    signOut(auth);
    setUserDetails(null);
  };

  return (
    <UserContext.Provider
      value={{ userDetails, addUser, fetchDetails, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
