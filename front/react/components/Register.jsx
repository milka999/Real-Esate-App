import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordConfirm != password) {
      console.error("Šifre se ne poklapaju");
    }

    axios
      .post("http://localhost:3000/api/v1/auth/register", {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      })
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          window.location = "/login";
        }
      })
      .catch((error) => {
        console.error("Register error:", error);
        // ovo ćeš poslije da dodaš
        window.location = "/registerError";
      });
  };
  return (
    <>
      <NavbarLogin />
      <form className="user-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ime"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Prezime"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* fali validacija za ovaj unos - da je broj oblika +382 6_ ___ ___ */}
          <input
            type="text"
            placeholder="Broj Telefona"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Šifra"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* opet validacija da se šifre poklapaju */}
          <input
            type="password"
            placeholder="Potvrdite šifru"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button type="submit" className="btn-blue">
            Registruj se
          </button>
        </div>
      </form>
      <p id="reg-link">
        Imate nalog? <Link to="/login">Ulogujte se</Link>
      </p>
    </>
  );
}
