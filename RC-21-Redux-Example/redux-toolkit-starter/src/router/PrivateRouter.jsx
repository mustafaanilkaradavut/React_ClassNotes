import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //__ TODO : Global state'den user bilgisinin elde edilmesi gerekiyor. UseSelector hook'u ile.
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
