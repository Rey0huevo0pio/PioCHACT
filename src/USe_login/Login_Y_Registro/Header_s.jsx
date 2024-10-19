// header.jsx
import Heder_prin from "./Header.module.css";
import logo from "../../assets/logo/fondo_1.jpg";

const Header_s = () => {
  return (
    <nav className={Heder_prin.nam}>
      <div className={Heder_prin.dim}>
        <img src={logo} className={Heder_prin.imf} alt="Logo" />
      </div>
      <h1 className={Heder_prin.hw}>BIENVENIDOS A PIOOO CHAT</h1>
    </nav>
  );
};

export default Header_s;
