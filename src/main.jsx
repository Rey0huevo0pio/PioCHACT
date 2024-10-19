import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter

import "./index.css";
import App from "./USe_login/Login_Y_Registro/App"; // Asegúrate de importar el componente App

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App /> {/* Renderiza el componente App dentro de BrowserRouter */}
    </BrowserRouter>
  </StrictMode>,
);
