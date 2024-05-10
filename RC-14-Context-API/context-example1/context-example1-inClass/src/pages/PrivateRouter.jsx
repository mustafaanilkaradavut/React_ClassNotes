import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  //__ TODO global state'den okunacak bilgiye göre hareket edecek.
  // const user = false

  //? consuming  / Global state'den okuma işlemidir.
  const { signed } = useContext(LoginContext);
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
