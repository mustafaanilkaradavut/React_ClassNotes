import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //__ TODO : Global state'den user bilgisinin elde edilmesi gerekiyor. UseSelector hook'u ile.
  // const user = false;

  // const user = useSelector((state) => state.login.user);
  const { user } = useSelector((state) => state.login);
  //.. Burada gerçek login bilgilerini okuruz.

  //__ useSelector, Bir fonksiyonla state erişip o state'de bulunan veriyi çekmemize yarar.
  return user?.email && user?.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
