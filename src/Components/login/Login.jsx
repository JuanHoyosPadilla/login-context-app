import "./login.css";
import { useState,useContext } from "react";
import {SesionContext} from '../../Context/SesionContext'
import { FaEnvelope, FaExpeditedssl } from "react-icons/fa";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {submitLogin} = useContext(SesionContext)
  const handelSubmit = (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    return submitLogin(data)
  }

  return (
    <div className="container-login">
      <form className="cart-form" onSubmit={handelSubmit}>
        <div className="form-input">
          <span>
            <FaEnvelope style={{ color: "rgba(237, 26, 26, 0.813)" }} />
          </span>
          <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="E-mail" />
        </div>
        <div className="form-input">
          <span>
            <FaExpeditedssl style={{ color: "rgba(237, 26, 26, 0.813)" }} />
          </span>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <button>Ingresar</button>
      </form>
    </div>
  );
}
