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
//__     3-) Consuming işlemini basitleştirmek için bir custom hook tanımlarız.
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;

{
  /* <LoginProvider value={}>

    <App/>

</LoginProvider> */
}
