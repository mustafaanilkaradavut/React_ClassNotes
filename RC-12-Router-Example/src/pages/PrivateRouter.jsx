import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import Login from "./Login";

const PrivateRouter = () => {
  //? Context, Redux, Mobx, Zustang (Global State management, Local Staroge, session)
  const isLogged = false;
  //   const navigate = useNavigate()
  return <div> {isLogged ? <Outlet /> : <Navigate to={"/login"} />} </div>;

  //.. Burası component sayfası olduğu için Navigate hook'unu kullanamayız. O yüzden  <Navigate to= olarak kullanırız.
};

export default PrivateRouter;

//__ useNavigate (Hook) ile Navigate(Component) aslında aynı işi yapar. Yani yönlendirme işlemini gerçekleştirir.

//__ Aralarındaki fark kullanım yerleridir. Hook olan bir event ya da useEfect hook'u nun içerisi gibi yerlerde kullanılır. (Fonkisyionların kullanıldığı yerler.)

//__Diğeri ise bir component olduğu için JSX içeriside yönlendirme yapmak gerektiği durumlarda kullanılır.

//__ Link ise kullanıcıdan bir girdi beklenildiği durumlarda kullanılabilir.
