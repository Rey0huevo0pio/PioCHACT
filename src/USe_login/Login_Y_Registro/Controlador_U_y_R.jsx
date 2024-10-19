import { useState } from "react";
import Registro_l from "./Registro_l.jsx";
import Login from "./Login.jsx";

const Controlador_U_y_R = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="container">
      {showRegister ? (
        <Registro_l setShowRegister={setShowRegister} />
      ) : (
        <Login setShowRegister={setShowRegister} />
      )}
    </div>
  );
};

export default Controlador_U_y_R;
