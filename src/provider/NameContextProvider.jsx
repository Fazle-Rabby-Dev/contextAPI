import { useState } from "react"
import { NameContext } from "../Context"

const NameContextProvider = ({children}) => {
      const [isLogin, setIsLogin] = useState(false);
      const [Name, setName] = useState("User One");
      const [Nam, setNam] = useState("User Two");
       const toggleLogin = () => {
    if (!isLogin) {
      setName("Web Developer");
      setNam("Digital Marketer");
    } else {
      setName("User One");
      setNam("User Two");
    }
    setIsLogin(!isLogin);
  };
    return (
        <NameContext.Provider value={{Name,Nam,isLogin,toggleLogin }}>
            {children}
        </NameContext.Provider>
    )
}
export default NameContextProvider