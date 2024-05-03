import React from "react";
import { createRoot } from "react-dom/client"; 
// createRoot fonksiyonunu doğrudan react-dom/client modülünden içe aktarırız.
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root")); // createRoot fonksiyonunu doğrudan kullanırız.
root.render(<App />);
