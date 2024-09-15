/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
// eslint-disable-next-line no-unused-vars
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function mapBool(bool) {
  if (bool === true) {
    return "Da";
  } else {
    return "Ne";
  }
}

export default function Listing() {
  const [listing, setListing] = useState([]);
  const { id } = useParams();
  const [formattedPrice, setFormattedPrice] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for form submission

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/listings/single/${id}`)
      .then((response) => {
        setListing(response.data.rows[0]);
        setFormattedPrice(
          response.data.rows[0].price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // poziv ka beku, pošalji email na adresu korisnika koji je kreirao listing
    setIsSubmitted(true);
  };

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 xl:px-32 my-10">
        <h1 className="text-2xl font-semibold text-center mb-6">
          {listing.title}
        </h1>

        <div className="w-full max-w-4xl">
          {/* <Carousel /> */}
          <img
            src={listing.img_url}
            alt={listing.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-6"
          />
          <p className="font-light mb-6">{listing.description}</p>
          <hr className="mb-6" />

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">
              Osnovne karakteristike
            </h2>
            <ul className="ml-4 space-y-2">
              <li>
                <strong>Lokacija:</strong> {listing.location_id}
              </li>
              <li>
                <strong>Broj Soba:</strong> {listing.structure_id}
              </li>
              <li>
                <strong>Obezbjeđeno parking mjesto:</strong>{" "}
                {mapBool(listing.parking)}
              </li>
              <li>
                <strong>Terasa:</strong> {mapBool(listing.terrace)}
              </li>
              <li>
                <strong>Bašta:</strong> {mapBool(listing.garden)}
              </li>
              <li>
                <strong>Kvadratura:</strong> {listing.unit_size} m²
              </li>
              <li>
                <strong>Cijena:</strong> {formattedPrice}€
              </li>
              <li>
                <strong>Kontakt telefon:</strong> {listing.contact}
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-full max-w-4xl mt-10 mb-6" />

        <div className="w-full max-w-4xl">
          {isSubmitted ? (
            <p className="text-green-600 text-lg font-semibold text-center">
              Upit uspješno poslat
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Pošaljite upit</h3>

                <input
                  type="text"
                  placeholder="Ime"
                  required
                  className="p-3 border-2 border-gray-300 rounded-md mb-4"
                />
                <input
                  type="text"
                  required
                  placeholder="Prezime"
                  className="p-3 border-2 border-gray-300 rounded-md mb-4"
                />
                <input
                  type="tel"
                  required
                  placeholder="Broj Telefona"
                  className="p-3 border-2 border-gray-300 rounded-md mb-4"
                />
                <input
                  type="email"
                  placeholder="Email adresa"
                  required
                  className="p-3 border-2 border-gray-300 rounded-md mb-4"
                />
                <textarea
                  placeholder="Dodatne informacije"
                  className="p-3 border-2 border-gray-300 rounded-md mb-4"
                  rows="5"
                ></textarea>
                <button className="bg-green-600 text-white rounded-md p-3 hover:bg-green-700 w-full sm:w-1/3 mx-auto">
                  Pošalji
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
