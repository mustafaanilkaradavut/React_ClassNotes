import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <>
      <Navbar />
      <Outlet />
      {/* //__ Nav-bar'ı buraya ekleriz. Sebebi sadece login kısmında navbar gözükmesin ve diğer componentlerde görülmesini istiyoruz. AppRouter kısmından navBar'ı kaldırırız. */}
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
