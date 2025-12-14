
import { useContext } from "react";
import { NameContext } from "../Context";

const Button = () => {
  const { isLogin, toggleLogin } = useContext(NameContext);

  return (
    <button onClick={toggleLogin}>
      {isLogin ? "Logout" : "Login"}
    </button>
  );
};

export default Button;
