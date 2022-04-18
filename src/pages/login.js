import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { auth, googleAuth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import FormInput from "../components/FormInput";

import google from "../assets/images/google.svg";
import backArrow from "../assets/images/back-arrow.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const correctEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(correctEmail) || email === "") {
      setError("email-valid");
      return;
    } else if (password.length < 6) {
      setError("password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      setError("");
      navigate("/app/dashboard");
    } catch (error) {
      if (error.message.toLowerCase().includes("auth/user-not-found")) {
        setError("email-not-found");
      } else if (error.message.toLowerCase().includes("auth/wrong-password")) {
        setError("password");
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen sm:p-10">
      <Helmet>
        <title>Login - Shortly</title>
      </Helmet>

      <div className="w-[90%] max-w-[440px] py-10 sm:py-12 px-5 sm:px-12 sm:bg-white sm:shadow-2xl sm:shadow-neutral-gray sm:rounded-2xl">
        <Link to="/">
          <button className="flex items-center gap-2 hover:gap-3 font-medium text-sm mb-4 transition-all">
            <div className="w-4">
              <img src={backArrow} alt="back arrow icon by flaticon uicons" />
            </div>
            <span>Back</span>
          </button>
        </Link>

        <h2 className="text-3xl font-semibold">Login</h2>

        <button
          className="flex justify-center items-center gap-3 w-full text-neutral-grayishViolet font-medium py-3 px-8 border-2 border-solid border-gray-200 hover:border-neutral-darkViolet mt-7 rounded-xl transition-all"
          onClick={async () => {
            const res = await googleAuth();
            if (res) {
              navigate("/app/dashboard");
            }
          }}
        >
          <div className="w-4">
            <img src={google} alt="google icon by flaticon uicons" />
          </div>
          <span className="text-sm">Login with Google</span>
        </button>

        <span className="block text-center text-neutral-gray my-6">
          Or, login with
        </span>

        <form onSubmit={login}>
          <div className="flex flex-col gap-4">
            <FormInput
              id="email"
              placeholder={"Email Address"}
              value={email}
              setValue={setEmail}
              error={error.includes("email") ?? false}
              errorMessage={
                error === "email-valid"
                  ? "Enter correct email address"
                  : "No account found with given email"
              }
            />
            <FormInput
              id="password"
              placeholder={"Password"}
              value={password}
              setValue={setPassword}
              error={error === "password" ?? false}
              errorMessage={"Enter correct password"}
            />
          </div>

          <button className="w-full text-white font-medium py-3 px-8 bg-primary-cyan lg:hover:bg-opacity-60 mt-5 rounded-xl transition-all">
            Login
          </button>
        </form>

        <p className="text-neutral-grayishViolet text-center mt-4 text-sm">
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
