import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when component mounts
  useEffect(() => {
    // Assume you store a token or login status in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  function handleLoginClick() {
    navigate("login");
  }

  function handleLogoutClick() {
    // Clear the token and set the user as logged out
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="flex flex-row font-sans bg-black text-white justify-between p-4 align-baseline text-lg rounded-b-lg">
      <a href="/" id="logo">
        <p className="text-3xl font-bold">RealEstate</p>
      </a>
      <div className="align-baseline pt-1">
        <Link
          to="/?type=2"
          className="mr-10 hover:border-green-600 hover:border-solid hover:border-2 hover:rounded-lg p-1"
        >
          Izdavanje
        </Link>
        <Link
          to="/?type=1"
          className="mr-10 hover:border-green-600 hover:border-solid hover:border-2 hover:rounded-lg p-1"
        >
          Kupovina
        </Link>
      </div>
      {/* Conditionally render buttons based on login status */}
      {isLoggedIn ? (
        <div>
          <Link
            to="newListing"
            className="text-green-600 border-2 border-green-600 rounded-md p-2 hover:bg-black hover:text-white hover:border-black hover:border-solid hover:border-2 mr-3"
          >
            Novi oglas
          </Link>
          <button
            onClick={handleLogoutClick}
            className="text-green-600 border-2 border-green-600 rounded-md p-2 hover:bg-black hover:text-white hover:border-black hover:border-solid hover:border-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLoginClick}
          className="bg-green-600 rounded-md text-black p-2 hover:bg-black hover:text-white hover:border-green-600 hover:border-solid hover:border-2"
        >
          Login
        </button>
      )}
    </div>
  );
}
