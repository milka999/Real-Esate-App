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
      <div className="w-1/2 mx-auto m-3 max-w-md">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Ime"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2 mt-10"
            />
            <input
              type="text"
              placeholder="Prezime"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2"
            />
            {/* fali validacija za ovaj unos - da je broj oblika +382 6_ ___ ___ */}
            <input
              type="text"
              placeholder="Broj Telefona"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2"
            />
            <input
              type="password"
              placeholder="Šifra"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2"
            />
            {/* opet validacija da se šifre poklapaju */}
            <input
              type="password"
              placeholder="Potvrdite šifru"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="p-3 border-2 border-green-500 rounded-md m-2"
            />
            <button
              type="submit"
              className="bg-green-600 rounded-md text-black p-2 hover:bg-black hover:text-white hover:border-green-600 hover:border-solid hover:border-2 w-1/3 mx-auto m-2"
            >
              Registruj se
            </button>
          </div>
        </form>
        <p className="text-center">
          Imate nalog?{" "}
          <Link to="/login" className="text-green-500 hover:text-green-700">
            Ulogujte se
          </Link>
        </p>
      </div>
    </>
  );
}
