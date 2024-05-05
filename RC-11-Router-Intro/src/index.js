import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { BrowserRouter } from "react-router-dom"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <BrowserRouter>
  <App />
  //   </BrowserRouter>
);

//__ Bu şekilde App.js'ye çıkarak tamamını kapsayan bir şekilde yapabilir. Yahut App.js'de tanımlayabiliriz.