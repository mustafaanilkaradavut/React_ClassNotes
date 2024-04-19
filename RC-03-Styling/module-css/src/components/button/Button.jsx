import React from "react";
// import "./Buton.css";
import ButtonStyle from "./Button.module.css";

//* Eğer CSS'deki class adı kebap-case şeklinde yazılmış ise
//* Module ile bu class'a erişmek için  örnekte görüldüğü gibi
//* köşeli parentez ile erişim yapılır. Köşeli parentez erişimi
//* en garanti yöntemdir.

//* ORN:moduleName["class-adi"]

const Button = () => {
  return (
    <div className={ButtonStyle.wrapper}>
      <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-blue"]}`}>
        Info
      </button>
      <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-red"]}`}>
        Back
      </button>
    </div>
  );
};

export default Button;
