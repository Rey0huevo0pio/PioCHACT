import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Controlador_U_y_R from "./Controlador_U_y_R";
import Prin from "../Pes_chat/Pes_chact_in";
import Header from "./Header_s"; // Asegúrate de que la importación sea correcta

import "../../index.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Aplica la clase solo en la ruta principal
    if (location.pathname === "/") {
      document.body.classList.add("body-with-background");

      document.body.classList.add("body-boy");
    } else {
      document.body.classList.remove("body-with-background");
      document.body.classList.remove("body-boy");
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/" && <Header />}{" "}
      {/* Mostrar Header solo en la ruta principal */}
      <Routes>
        <Route path="/" element={<Controlador_U_y_R />} />
        <Route path="/Pes_chat/" element={<Prin />} />
      </Routes>
    </>
  );
}

export default App;
