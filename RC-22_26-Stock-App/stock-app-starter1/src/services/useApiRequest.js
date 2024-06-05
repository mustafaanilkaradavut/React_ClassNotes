import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useApiRequest = () => {
  const dispatch = useDispatch;
  const navigate = useNavigate;
  //?  bu şekilde okuma yerine .env'de global bir state atarız.
  const login = async (userData) => {
    //   const BASE_URL = "https://12138.fullstack.clarusway.com";
    dispatch(fetchStart());

    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login is success");
      navigate("/stock");
      console.log(data);
      return data;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login is nonstarter");
      console.log(error);
    }
  };

  const register = async () => {};
  const logout = async () => {};

  return { login, register, logout };
};

export default useApiRequest;

//__ Bu kodlar aslında bir react component'i değil, customHook değil. Burada DOM'a basılacak işlem değil yardımcı func yazarız.
//__ Bu yüzden customHook kullanırız. JSX döndürme zorunluluğu yoktur. (useApiRequest altında yazarız tüm kodları)
//__ Burada yazdığımız code'ların hepsini projenin istediğimiz yerde kullanmak asıl amacımızdır.
