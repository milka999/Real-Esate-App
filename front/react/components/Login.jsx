import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/auth/login", { email, password })
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          window.location = "/";
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        // ovo ćeš poslije da dodaš
        window.location = "/loginError";
      });
  };

  return (
    <>
      <NavbarLogin />
      <form className="user-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-blue">
            Uloguj se
          </button>
        </div>
      </form>
      <p id="reg-link">
        Nemate nalog? <Link to="/register">Registrujte se</Link>
      </p>
    </>
  );
}
