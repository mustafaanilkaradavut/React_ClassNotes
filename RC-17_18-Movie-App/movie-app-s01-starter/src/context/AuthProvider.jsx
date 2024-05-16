import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

// Custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Bildirim fonksiyonları
const toastSuccessNotify = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const toastErrorNotify = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      // Yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/login");
      toastSuccessNotify("Registered successfully");
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  // https://console.firebase.google.com/
  // => Authentication => sign-in-method => enable Email/password
  // Email/password ile girişi enable yap
  const signIn = async (email, password) => {
    try {
      // Mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Signed in successfully");
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toastSuccessNotify("Logged out successfully");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const values = { currentUser, createUser, signIn, logOut };

  return (
    <AuthContext.Provider value={values}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
