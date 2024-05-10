import { useContext } from "react";
import { createContext, useState } from "react";

//?__    1-) Login context'nin olusturulması.
export const LoginContext = createContext();

//__     2-) Login context için sarmalıyıcı component oluşturduk.
const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false);

  const values = { signed, setSigned };
  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );
};
//__     3-) Consuming işlemini basitleştirmek için bir custom hook tanımlarız. (useLoginContext)
//?          LoginContext değilde useLoginContext olmasının sebebi
export const useLoginContext = () => {
  return useContext(LoginContext);
};

// const deneme useLoginContext=()=>{
//   return useContext(LoginContext)
// }
//.. React component'i bir jsx döndürür.
//.. Custom hook içerisinde başka hook döndürebileceğimiz jsx olmayan bir koddur. use ile başlamak zorundadır.

export default LoginProvider;

// {
//   /* <LoginProvider value={}>

//     <App/>

// </LoginProvider> */
// }
