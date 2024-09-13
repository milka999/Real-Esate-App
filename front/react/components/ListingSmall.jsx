/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function ListingSmall({ listing }) {
  const date = new Date(listing.date_uploaded);
  const formattedDate = date.toLocaleDateString("de-De");
  return (
    <div className="border-2 rounded-xl m-2">
      <img
        src={listing.img_url}
        alt={listing.name}
        className="rounded-xl"
      ></img>
      <div className="m-2">
        <div className="flex flex-row justify-between">
          <Link to={`${listing.id}`}>
            <h2 className="text-lg font-bold m-1">{listing.title}</h2>
          </Link>
          <p className="m-1">{listing.price} €</p>
        </div>
        <a href="">{listing.location}</a>
        <p className="m-1 font-light">
          {listing.description.slice(0, 200)} ...
        </p>
        <div>
          <p className="m-1 font-semibold">
            Kontakt telefon: {listing.contact}
          </p>
          <div className="flex flex-row justify-between">
            <p className="m-1 font-semibold">Datum objavljivanja:</p>
            <p className="m-1">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
