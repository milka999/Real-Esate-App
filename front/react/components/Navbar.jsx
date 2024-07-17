import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("login");
  }

  return (
    <div className="navbar">
      <a href="/" id="logo">
        RealEstate
      </a>
      <div id="navbar-items">
        <Link to="/izdavanje">Izdavanje</Link>
        <Link to="/kupovina">Kupovina</Link>
      </div>
      <button onClick={handleClick} className="btn-blue">
        Login
      </button>
    </div>
  );
}
