import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";

export default function Register() {
  return (
    <>
      <NavbarLogin />
      <form className="user-form">
        <div>
          <input type="text" placeholder="Ime" />
          <input type="text" placeholder="Prezime" />
          <input type="email" placeholder="Email" />
          {/* fali validacija za ovaj unos - da je broj oblika +382 6_ ___ ___ */}
          <input type="text" placeholder="Broj Telefona" />
          <input type="password" placeholder="Šifra" />
          {/* opet validacija da se šifre poklapaju */}
          <input type="password" placeholder="Potvrdite šifru" />
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
