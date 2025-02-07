import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
          alt="BG-IMAGE"
        />
      </div>
      <form className="w-3/12 absolute  bg-black/85 p-12 mx-auto my-50 left-0 right-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4" onClick={toggleSignInForm}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="my-4 p-4 w-full border  bg-gray-700 text-black"
        />)}
        <input
          type="text"
          placeholder="Email Adress"
          className="my-4 p-4 w-full border  bg-gray-700 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full border bg-gray-700 text-black"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 on cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now!"
            : "Already Registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
