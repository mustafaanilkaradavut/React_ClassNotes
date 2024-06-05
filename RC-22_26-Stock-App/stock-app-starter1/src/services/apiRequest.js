import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

export const login = async (userData) => {
  const dispatch = useDispatch;
  //   const BASE_URL = "https://12138.fullstack.clarusway.com";
  //*  bu şekilde okuma yerine .env'de global bir state atarız.
  dispatch(fetchStart());

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      userData
    );
    dispatch(loginSuccess(data));
    toastSuccessNotify("Login is success");
    console.log(data);
    return data;
  } catch (error) {
    toastErrorNotify("Login is nonstarter");
    console.log(error);
  }
};
