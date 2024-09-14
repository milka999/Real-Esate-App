import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("login");
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
      <button
        onClick={handleClick}
        className="bg-green-600 rounded-md text-black p-2 hover:bg-black hover:text-white hover:border-green-600 hover:border-solid hover:border-2"
      >
        Login
      </button>
    </div>
  );
}
