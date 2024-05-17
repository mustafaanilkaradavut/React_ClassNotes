import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
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

const toastWarnNotify = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []); // Burada boş bir bağımlılık dizisi kullanarak yalnızca bir kez çalışmasını sağlıyoruz.

  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName,
      });
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
        toastErrorNotify(error.message);
      });
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, displayName, photoURL } = user; // 'displayName' kullanılıyor
        setCurrentUser({ email, displayName, photoURL });
      } else {
        // User is signed out
        setCurrentUser(null); // 'false' yerine 'null' kullanılıyor
      }
    });
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const googleProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarnNotify("Please check your mail box!");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const values = {
    currentUser,
    createUser,
    signIn,
    logOut,
    googleProvider,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
