import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { auth } from "../firebase/index";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
  });
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

      setError({
        username: false,
        email: false,
        password: false,
      });

      navigate('/');
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
    <div className="min-h-screen w-full flex items-center justify-center sm:p-10">
      <Helmet>
        <title>Sign Up - Shortly</title>
      </Helmet>

      <div className="py-10 sm:py-12 px-5 sm:px-12 w-[90%] max-w-[440px] sm:shadow-2xl sm:bg-white sm:shadow-gray-200 sm:rounded-2xl">
        <h2 className="text-3xl font-semibold">Sign Up</h2>

        <div className="flex items-center gap-2 mt-7">
          <button className="grid place-items-center py-3 px-8 font-medium w-full rounded-xl border-2 border-solid border-gray-300 text-gray-500 transition-all">
            <div className="w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </div>
          </button>

          <button className="grid place-items-center py-3 px-8 font-medium w-full rounded-xl border-2 border-solid border-gray-300 text-gray-500 transition-all">
            <div className="w-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
          </button>
        </div>

        <span className="my-6 block text-center text-gray-400">
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
                className={`bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none ${
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
                className={`bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none ${
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
                className={`bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none ${
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

          <button className="mt-5 py-3 px-8 text-white font-medium bg-[#2bd1cf] w-full lg:hover:bg-opacity-30 rounded-xl transition-all">
            Create Account
          </button>
        </form>

        <p className="text-gray-500 text-center mt-4 text-sm">
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
