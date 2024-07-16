/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function ListingSmall({ listing }) {
  return (
    <div className="listing-container">
      <img src={listing.imgUrl} alt="stan"></img>
      <div className="listing-text-container">
        <div>
          <Link to={`${listing.id}`}>
            <h2>{listing.title}</h2>
          </Link>
          <p>{listing.price}</p>
        </div>
        <a href="">{listing.location}</a>
        <p>{listing.description}</p>
        <div>
          <p>Kontakt telefon: {listing.contact}</p>
          <p>Datum objavljivanja: {listing.date}</p>
        </div>
      </div>
    </div>
  );
}
