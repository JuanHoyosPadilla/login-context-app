import "./home.css";
import {useContext} from 'react'
import {SesionContext} from '../../Context/SesionContext'
import { Link } from "react-router-dom";
import Perfil from "../perfil/Perfil";
export default function Home() {
  const {isLogin} = useContext(SesionContext)
  return (
    <div className="container-home">
      <div className="container-titles">
        <h2>
          Hola Bienvenido a Cont<span>/App</span>
        </h2>
        {
          isLogin ? <Perfil/>
                  : (
                    <div>
                      <h3>No te encuntras Logueado</h3>
                      <button><Link className="link" to="/login">¿Quieres Loguearte?</Link></button>
                    </div>
                  )
        }
      </div>
    </div>
  );
}
