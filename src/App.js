import {useContext} from 'react'
import "./App.css";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import LoginPages from "./pages/LoginPages";
import {SesionContext} from "./Context/SesionContext";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

function App() {
  const {isLogin} = useContext(SesionContext);
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route  path="/login"  element={isLogin?<Navigate to='/' />:<LoginPages/>}/>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
