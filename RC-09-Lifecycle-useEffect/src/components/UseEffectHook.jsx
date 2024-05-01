//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componentler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //! componentDidMount + componentWillUnmount
  // useEffect(() => {
  //   console.log("2-componentDidMount")

  //   //* clean-up funct. component DOM tree 'Dan kaldırıldıtkan sorna calisir.
  //   return () => {
  //     console.log("4-componentWillUnmount")
  //   }
  // }, []) //* dependency array boş olduğu için fonksiyonun gövdesi sadece ilk render sonrasında (bir kere) çalışır.

  //! componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("2-componentDidMount");
    console.log("2-componentDidUpdate");
  }, [count]); //? count state'i her degistiginde fonksiyonun gövdesi tekrar calisti. Bu durumda gövde hem mounting de hem de updating de calismis oldu.

  //! componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  console.log("1- Rendering");
  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT HOOK</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
