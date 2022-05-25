import { useContext } from "react";
import { SesionContext } from "../../Context/SesionContext";
import "./nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  const { isLogin,handelClickSalir } = useContext(SesionContext);
  return (
    <div className="container-nav">
      <div className="logo">
        <h1>
          Cont<span>/App</span>
        </h1>
      </div>
      <div className="login-container">
        {!isLogin ? (
          <Link className="span" to="/login">
            Login
          </Link>
        ) : (
          <span className="span" onClick={handelClickSalir} >Salir</span>
        )}
      </div>
    </div>
  );
}
