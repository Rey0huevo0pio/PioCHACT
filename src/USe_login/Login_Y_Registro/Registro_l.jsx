import { useState } from "react";
import "./Login_use.css";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import PropTypes from "prop-types";

const Registro_l = ({ setShowRegister }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost/PioCHACT/src/USe_login/php_carpe/Login_rgt.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      },
    );

    const result = await response.json();
    if (result.status === "success") {
      setMessage("Registration successful!");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <FaUser className="icon" />
      </div>

      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <MdLock className="icon" />
      </div>
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
      <div className="register-link">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={() => setShowRegister(false)}>
            Login
          </a>
        </p>
      </div>
    </form>
  );
};

Registro_l.propTypes = {
  setShowRegister: PropTypes.func.isRequired,
};

export default Registro_l;
