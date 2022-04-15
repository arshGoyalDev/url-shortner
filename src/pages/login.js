import {  useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { auth, googleAuth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const correctEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(correctEmail) || email === "") {
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
      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
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
        <title>Login - Shortly</title>
      </Helmet>

      <div className="w-[90%] max-w-[440px] py-10 sm:py-12 px-5 sm:px-12 sm:bg-white sm:shadow-2xl sm:shadow-gray-200 sm:rounded-2xl">
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

        <h2 className="text-3xl font-semibold">Login</h2>

        <button
          className="flex justify-center items-center gap-2 w-full text-gray-500 font-medium py-3 px-8 border-2 border-solid border-gray-300 mt-7 rounded-xl transition-all"
          onClick={async () => {
            const res = await googleAuth();
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
          <span className="text-sm">Login with Google</span>
        </button>

        <span className="block text-center text-gray-400 my-6">
          Or, login with
        </span>

        <form onSubmit={login}>
          <div className="flex flex-col gap-3">
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
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
                  error.email ? "border-red-600" : "border-gray-100"
                }`}
              />
              {error.email && (
                <span className="text-red-600 text-xs ml-2">
                  Enter correct email address
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
                  Enter correct password
                </span>
              )}
            </div>
          </div>

          <button className="w-full text-white font-medium py-3 px-8 bg-[#2bd1cf] lg:hover:bg-opacity-60 mt-5 rounded-xl transition-all">
            Login
          </button>
        </form>

        <p className="text-gray-500 text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-black font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
