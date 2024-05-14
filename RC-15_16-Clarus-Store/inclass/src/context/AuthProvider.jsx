import React, { createContext, Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const {Provider} =  createContext()
export const AuthContext = createContext();
//__ Bu işlem sonrası hook kullanılacağı için ve bu compenenti başka yerde kullanacağımız için export etmemiz lazım.

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
    //__ 2. Get işlemini ise useState'in initial değer vererek yaparız. Uygulama açıldığında localstrogeden değer alıp set ederiz.
  );
  const navigate = useNavigate();

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };

  const logout = () => setUser(null);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //__  1. useEffect ile login-logout işlemleri sırasında sessinstroge'ya atar ve set işlemi yapar.

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
