import { useContext } from "react"
import { createContext, useState } from "react"

//? 1-) Login context'nin olusturulması
export const LoginContext = createContext()

//? 2-) Login context'için sarmalıyı compoenent oluşturduk
const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false)

  const values = { signed, setSigned }
  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  )
}
//? 3-) Consuming işlemini basitleştirmek için bir custom hook
export const useLoginContext = () => {
  return useContext(LoginContext)
}

export default LoginProvider

{
  /* <LoginProvider value={}>

    <App/>

</LoginProvider> */
}
