import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
export default function Login() {
  return (
    <>
      <NavbarLogin />
      <form className="user-form">
        <div>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
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
