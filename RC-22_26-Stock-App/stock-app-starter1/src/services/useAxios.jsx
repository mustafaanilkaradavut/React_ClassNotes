import axios from "axios";
import { useSelector } from "react-redux";

//__ axios instance kullanırız. const instance = axios.create ({baseURL,timeOut,headers})
//__ axios kullanımımızı basit hale getirir.

//? Custom Hook - token'ı state'in içerisinden çıkarmamız lazım. Çünkü token global state'ten okunabilir olmalı.
const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  //? Axios Instance
  const axiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });

  return { axiosToken, axiosPublic };
};

export default useAxios;
