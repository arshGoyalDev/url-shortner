import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import SignUp from "./pages/sign-up";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </main>
  );
};

export default App;
