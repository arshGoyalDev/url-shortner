import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { auth, authGoogle, database } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { data } from "autoprefixer";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();

    const correctEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (username === "") {
      setError({
        username: true,
        email: false,
        password: false,
      });

      return;
    } else if (!email.match(correctEmail) || email === "") {
      setError({
        username: false,
        email: true,
        password: false,
      });

      return;
    } else if (password === "") {
      setError({
        username: false,
        email: false,
        password: true,
      });

      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      // addDoc(colRef, {
      // title: addForm.title.value,
      // author: addForm.author.value,
      // createdAt: serverTimestamp(),
      // }).then(() => {
      // addForm.reset();
      // });

      await setDoc(doc(database, "users", user.user.uid), {
        signedIn: true,
        username: username,
        email: email,
        id: user.user.uid,
      });

      const docRef = doc(database, "users", user.user.uid);

      onSnapshot(docRef, (doc) => {
        console.log({ ...doc.data(), id: user.user.uid });
      });

      setError({});
      navigate("/app");
    } catch (error) {
      if (error.message.toLowerCase().includes("email")) {
        setError({
          username: false,
          email: true,
          password: false,
        });
      } else if (error.message.toLowerCase().includes("password")) {
        setError({
          username: false,
          email: false,
          password: true,
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen sm:p-10">
      <Helmet>
        <title>Sign Up - Shortly</title>
      </Helmet>

      <div className="w-[90%] max-w-[440px] py-10 sm:py-12 px-5 sm:px-12 sm:bg-white rounded-2xl sm:shadow-2xl sm:shadow-gray-200">
        <Link to="/">
          <button className="flex items-center gap-2 font-medium text-sm mb-4">
            <div className="w-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
              </svg>
            </div>
            <span>Back</span>
          </button>
        </Link>

        <h2 className="text-3xl font-semibold">Sign Up</h2>

        <button
          className="flex justify-center items-center gap-3 w-full font-medium text-gray-500 py-3 px-8 border-2 border-solid border-gray-300 mt-7 rounded-xl transition-all"
          onClick={async () => {
            const res = await authGoogle();
            if (res) {
              navigate("/app");
            }
          }}
        >
          <div className="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </div>
          <span className="text-sm">Sign Up with Google</span>
        </button>

        <span className="block text-center text-gray-400 my-6">
          Or, sign up with
        </span>

        <form onSubmit={createUser}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 font-medium pl-1"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
                  error.username ? "border-red-600" : "border-gray-100"
                }`}
              />
              {error.username && (
                <span className="text-red-600 text-xs ml-2">
                  Enter a valid username
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 font-medium pl-1"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
                  error.email ? "border-red-600" : "border-gray-100"
                }`}
              />
              {error.email && (
                <span className="text-red-600 text-xs ml-2">
                  Enter a valid email address
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm text-gray-600 font-medium pl-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
                  error.password ? "border-red-600" : "border-gray-100"
                }`}
              />
              {error.password && (
                <span className="text-red-600 text-xs ml-2">
                  Password length must be at least 6 character
                </span>
              )}
            </div>
          </div>

          <button className="w-full text-white font-medium py-3 px-8 bg-[#2bd1cf] lg:hover:bg-opacity-60 mt-5 rounded-xl transition-all">
            Create Account
          </button>
        </form>

        <p className="text-gray-500 text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
