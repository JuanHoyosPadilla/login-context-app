import React from "react";
import ReactDOM from "react-dom/client";
import { SesionProvider } from "./Context/SesionContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SesionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SesionProvider>
);
