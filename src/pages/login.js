import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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
      const user = await signInWithEmailAndPassword(auth, email, password);

      setError({});
      navigate("/");
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

  useEffect(() => {
    const logout = async () => {
      await signOut(auth);
    };

    logout();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:p-10">
      <Helmet>
        <title>Login - Shortly</title>
      </Helmet>

      <div className="py-10 sm:py-12 px-5 sm:px-12 w-[90%] max-w-[440px] sm:shadow-2xl sm:bg-white sm:shadow-gray-200 sm:rounded-2xl">
        <h2 className="text-3xl font-semibold">Login</h2>

        <button className="flex justify-center items-center gap-2 py-3 px-8 mt-7 font-medium w-full rounded-xl border-2 border-solid border-gray-300 text-gray-500 transition-all">
          <div className="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </div>
          <span className="text-sm">Login with Google</span>
        </button>

        <span className="my-6 block text-center text-gray-400">
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
                className={`bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none ${
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
                className={`bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none ${
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

          <button className="mt-5 py-3 px-8 text-white font-medium bg-[#2bd1cf] w-full lg:hover:bg-opacity-60 rounded-xl transition-all">
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
