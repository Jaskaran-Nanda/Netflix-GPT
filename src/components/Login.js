import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute object-cover w-full h-full "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/10922238-b880-476f-8a78-cb51cfa4f2c9/AE-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 m-36 mt-44 mx-auto right-0 left-0 2xl:w-[28%] text-white bg-black bg-opacity-75 rounded-lg md:w-2/5 sm:w-2/3 "
      >
        <h1 className="font-semibold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 mt-8 w-full bg-gray-800 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2  w-full bg-gray-800 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full mb-4 bg-gray-800 "
        />
        <p className="text-red-700  text-lg my-2">{errMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
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
