import { useContext, useState } from "react";
import UserContext from "../UserContext";

import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { auth, googleAuth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import FormInput from "../components/FormInput";

import google from "../assets/images/google.svg";
import backArrow from "../assets/images/back-arrow.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const createUser = async (e) => {
    e.preventDefault();

    const correctEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (username === "") {
      setError("username");
      return;
    } else if (!email.match(correctEmail) || email === "") {
      setError("email-valid");
      return;
    } else if (password.length < 6) {
      setError("password");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      addUser({
        username: username,
        email: email,
        uid: user.user.uid,
      });

      setError("");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/app/dashboard");
    } catch (error) {
      if (error.message.toLowerCase().includes("auth/email-already-in-use")) {
        setError("email-exits");
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
          <button className="flex items-center gap-2 hover:gap-3 font-medium text-sm mb-4 transition-all">
            <div className="w-4">
              <img src={backArrow} alt="back arrow icon by flaticon uicons" />
            </div>
            <span>Back</span>
          </button>
        </Link>

        <h2 className="text-3xl font-semibold">Sign Up</h2>

        <button
          className="flex justify-center items-center gap-3 w-full text-neutral-grayishViolet font-medium py-3 px-8 border-2 border-solid border-gray-200 hover:border-neutral-darkViolet mt-7 rounded-xl transition-all"
          onClick={async () => {
            const user = await googleAuth("createUser");
            addUser({
              username: user.displayName,
              email: user.email,
              uid: user.uid,
            });

            if (user) {
              navigate("/app/dashboard");
            }
          }}
        >
          <div className="w-4">
            <img src={google} alt="google icon by flaticon uicons" />
          </div>
          <span className="text-sm">Sign Up with Google</span>
        </button>

        <span className="block text-center text-neutral-gray my-6">
          Or, sign up with
        </span>

        <form onSubmit={createUser}>
          <div className="flex flex-col gap-4">
            <FormInput
              id="username"
              placeholder={"Username"}
              value={username}
              setValue={setUsername}
              error={error === "username" ?? false}
              errorMessage={"Enter a username"}
            />
            <FormInput
              id="email"
              placeholder={"Email address"}
              value={email}
              setValue={setEmail}
              error={error.includes("email") ?? false}
              errorMessage={
                error === "email-valid"
                  ? "Enter correct email address"
                  : "Email address already exits"
              }
            />
            <FormInput
              id="password"
              placeholder={"Password"}
              value={password}
              setValue={setPassword}
              error={error === "password" ?? false}
              errorMessage={"Password length must be at least 6 character"}
            />
          </div>

          <button className="w-full text-white font-medium py-3 px-8 bg-primary-cyan lg:hover:bg-opacity-60 mt-5 rounded-xl transition-all">
            Create Account
          </button>
        </form>

        <p className="text-neutral-grayishViolet text-center text-sm mt-4">
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
