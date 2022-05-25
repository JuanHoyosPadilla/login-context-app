import { createContext, useEffect, useState } from "react";
//import {useNavigate} from 'react-router-dom'
import { dataLogin } from "../data/data.js";
export const SesionContext = createContext();

export const SesionProvider = ({ children }) => {
  //const navigate = useNavigate()
  const [datas, setDatas] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("islogin")))
    setDatas(JSON.parse(localStorage.getItem("user")))
    
  },[isLogin])

  const submitLogin = (datos) => {
    const { correo, contraseña } = dataLogin;
    if (correo === datos.email && contraseña === datos.password) {
        setIsLogin(localStorage.setItem("islogin", JSON.stringify(!isLogin)));
        setDatas(localStorage.setItem("user", JSON.stringify(dataLogin)));
    }else{
        console.log("Datos erroneos");
    }
  };
  const handelClickSalir = () => {
    setDatas(() => localStorage.removeItem("user"));
    setIsLogin(() => localStorage.removeItem("islogin"));
  };
  return (
    <SesionContext.Provider value={{ datas, submitLogin, isLogin, handelClickSalir }}>
      {children}
    </SesionContext.Provider>
  );
};
