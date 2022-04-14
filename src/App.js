import { useContext, useEffect } from "react";
import UserContext from "./UserContext";

import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Home, SignUp, Login } from "./pages";

const App = () => {
  const { fetchDetails } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchDetails(user.uid);
      }
    });
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </main>
  );
};

export default App;
