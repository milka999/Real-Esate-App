import { useNavigate } from "react-router-dom";

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
        <a>Najam</a>
        <a>Kupovina</a>
      </div>
      <button onClick={handleClick} className="btn-blue">
        Login
      </button>
    </div>
  );
}
