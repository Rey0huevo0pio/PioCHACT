import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Login_use.css";

const Login = ({ setShowRegister }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      "http://localhost/PioCHACT/src/USe_login/php_carpe/login_base.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      },
    );

    const result = await response.json();
    setLoading(false);

    if (result.status === "success") {
      setIsSuccess(true);
      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/Pes_chat"); // Redirige a la página deseada
      }, 3500);
    } else {
      setIsSuccess(false);
      setMessage(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {message && (
        <p className={`message ${isSuccess ? "success" : "error"}`}>
          {message}
        </p>
      )}
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
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Loagin"}
      </button>

      <div className="register-link">
        <p>
          Don’t have an account?{" "}
          <a href="#" onClick={() => setShowRegister(true)}>
            Register
          </a>
        </p>
      </div>
    </form>
  );
};

Login.propTypes = {
  setShowRegister: PropTypes.func.isRequired,
};

export default Login;
