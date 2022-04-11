import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Helmet>
        <title>Sign Up - Shortly</title>
      </Helmet>

      <div className="py-10 px-5 w-[90%] max-w-[400px] md:shadow-2xl md:shadow-gray-200 md:rounded-xl">
        <h2 className="text-3xl font-semibold flex items-center gap-1">
          <button
            onClick={() => navigate(-1)}
            className="w-max py-2 pl-3 pr-3.5"
          >
            <div className="w-3 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
              </svg>
            </div>
          </button>
          Sign Up
        </h2>

        <form>
          <div className="mt-7">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-gray-900 font-medium pl-1"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5 mb-8">
              <label
                htmlFor="password"
                className="text-sm text-gray-900 font-medium pl-1"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
                className="bg-gray-100 rounded-xl py-3 px-4 text-sm w-full border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none"
              />
            </div>
          </div>

          <button className="py-3 px-8 text-white font-medium bg-[#2bd1cf] w-full lg:hover:bg-opacity-30 rounded-xl transition-all">
            Create Account
          </button>
        </form>
        <span className="text-gray-300 text-center w-full block my-4">OR</span>
        <button className="flex items-center justify-center gap-4 py-3 px-8 font-medium w-full rounded-xl border-2 border-solid border-gray-300 text-gray-500 transition-all">
          <div className="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </div>
          Sign Up with Google
        </button>

        <p className="text-gray-500 text-center mt-7 text-sm">
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
