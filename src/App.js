import { Routes, Route } from "react-router-dom";

import { Home, SignUp, Login } from "./pages";

const App = () => {
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
