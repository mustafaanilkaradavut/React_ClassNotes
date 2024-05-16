import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main main-h-screen">
      <AuthProvider>
        <AppRouter />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;
