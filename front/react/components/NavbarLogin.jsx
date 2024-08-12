import { Link } from "react-router-dom";

export default function NavbarLogin() {
  return (
    <div className="flex flex-row font-sans bg-black text-white justify-between p-4 align-baseline text-lg rounded-b-lg">
      <Link to="/">
        <h1 className="text-3xl font-bold">RealEstate</h1>
      </Link>
    </div>
  );
}
