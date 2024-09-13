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
      <div className="w-1/2 mx-auto m-3 max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2 mt-10"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2"
            />
            <button
              type="submit"
              className="bg-green-600 rounded-md text-black p-2 hover:bg-black hover:text-white hover:border-green-600 hover:border-solid hover:border-2 w-1/3 mx-auto m-2"
            >
              Uloguj se
            </button>
          </div>
        </form>
        <p className="text-center">
          Nemate nalog?{" "}
          <Link to="/register" className="text-green-500 hover:text-green-700">
            Registrujte se
          </Link>
        </p>
      </div>
    </>
  );
}
