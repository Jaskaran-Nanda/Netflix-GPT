import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute object-cover w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/10922238-b880-476f-8a78-cb51cfa4f2c9/AE-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 m-36 mt-44 mx-auto right-0 left-0 w-[28%] text-white bg-black bg-opacity-75 rounded-lg">
        <h1 className="font-semibold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 mt-8 w-full bg-gray-800 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2  w-full bg-gray-800 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
