import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const Dispatch = useDispatch();

  const emailref = useRef(null);
  const passwordref = useRef(null);
  const fullnameref = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    let authValidateForm;
    if (fullnameref.current && fullnameref.current.value) {
      authValidateForm = checkValidateData(emailref.current.value, passwordref.current.value, fullnameref.current.value);
    } else {
      authValidateForm = checkValidateData(emailref.current.value, passwordref.current.value);
    }
    
    if (authValidateForm) {
      setErrorMessage(authValidateForm);
      return;
    }

    setErrorMessage(null);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullnameref.current.value, 
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(() => {
            const {uid,email,displayName, photoURL} = auth.currentUser;
            console.log(auth.currentUser);
            Dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            Navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    };

    if (isSignInForm) {
      signInWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+ "-" + errorMessage);
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    };
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
      <form onSubmit={(e) =>{e.preventDefault()}} className="w-3/12 absolute  bg-black/85 p-12 mx-auto my-50 left-0 right-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4" onClick={toggleSignInForm}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          ref={fullnameref}
          type="text"
          placeholder="Full Name"
          className="my-4 p-4 w-full border  bg-gray-700 text-black"
        />)}
        <input
          ref={emailref}
          type="text"
          placeholder="Email Adress"
          className="my-4 p-4 w-full border  bg-gray-700 text-black"
        />
        <input
          ref={passwordref}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full border bg-gray-700 text-black"
        />
        {errorMessage && (
          <p className="text-red-500 text-lg font-bold py-4">
            {errorMessage}
          </p>)}
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
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
