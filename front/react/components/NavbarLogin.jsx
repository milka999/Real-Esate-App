import { Link } from "react-router-dom";

export default function NavbarLogin() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="login-logo">RealEstate</h1>
      </Link>
    </div>
  );
}
