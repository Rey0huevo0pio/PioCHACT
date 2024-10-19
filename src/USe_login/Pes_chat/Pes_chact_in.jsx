import Pes_1 from "./Pes_chact_in.module.css";
import logo from "../../assets/logo/fondo_4.jpg";
import Iclu from "../../assets/logo/iconos/busqueda-de-lupa.png";
import { PiStudentBold } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import { TbAlignBoxCenterStretch } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";

const Pes_chact_in = () => {
  return (
    <div className={Pes_1.Contai}>
      <header className={Pes_1.En_hed}>
        <div className={Pes_1.log}>
          <div className={Pes_1.dim}>
            <img src={logo} className={Pes_1.imf} alt="Logo" />
          </div>
          <h1 className={Pes_1.hw}>INICO</h1>
        </div>

        <div className={Pes_1.bus}>
          <input
            className={Pes_1.int}
            type="text"
            name="box"
            placeholder="Busca......."
          />
          <buttun className={Pes_1.btn_bus} type="submit">
            <img src={Iclu} alt="" className={Pes_1.Icn_bus} />
          </buttun>
        </div>

        <nav className={Pes_1.nam}>
          <a href="#" className={Pes_1.Lik_a}>
            Inico
          </a>
          <a href="#" className={Pes_1.Lik_a}>
            Login
          </a>
          <a href="#" className={Pes_1.Lik_a}>
            Notificacion
          </a>
        </nav>
        
      </header>
      <div className={Pes_1.maine}>
      <div className={Pes_1.cuadro_1}>
  <p className={Pes_1.lisT}>OPCIONES</p>
  <ul className={Pes_1.lisOpcion}>
    <li className={Pes_1.OpcionItem}>
      <a href="" className={Pes_1.Ocion}>Alumnos</a> <PiStudentBold className={Pes_1.icono}/>
    </li>
    <li className={Pes_1.OpcionItem}>
      <a href="" className={Pes_1.Ocion}>Grupos</a> <BsPersonSquare className={Pes_1.icono}/>
    </li>
    <li className={Pes_1.OpcionItem}>
      <a href="" className={Pes_1.Ocion}>Trabajo</a> <TbAlignBoxCenterStretch className={Pes_1.icono}/>
    </li>
    <li className={Pes_1.OpcionItem}>
      <a href="" className={Pes_1.Ocion}>Solicitar</a> <IoMdPersonAdd className={Pes_1.icono}/>
    </li>
  </ul>
</div>

        
        <div className={Pes_1.cuadro_2}>
          <p className={Pes_1.Ted}></p>
        </div>
      </div>
    </div>
  );
};

export default Pes_chact_in;

/*
En peze programando y ahora 






*/
