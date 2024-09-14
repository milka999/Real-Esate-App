/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
// eslint-disable-next-line no-unused-vars
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Listing() {
  const [listing, setListing] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/listings/single/${id}`)
      .then((response) => {
        console.log(response.data.rows[0]);
        setListing(response.data.rows[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
          {/*  <Carousel /> */}
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
                <strong>Lokacija:</strong> {listing.location}
              </li>
              <li>
                <strong>Broj Soba:</strong> {listing.numberOfRooms}
              </li>
              <li>
                <strong>Broj Kupatila:</strong> {listing.numberOfBathrooms}
              </li>
              <li>
                <strong>Kvadratura:</strong> {listing.size} m²
              </li>
              <li>
                <strong>Cijena:</strong> {listing.price}€
              </li>
              <li>
                <strong>Kontakt telefon:</strong> {listing.contact}
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-full max-w-4xl mt-10 mb-6" />

        <div className="w-full max-w-4xl">
          <form>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Pošaljite upit</h3>

              <input
                type="text"
                placeholder="Ime"
                className="p-3 border-2 border-gray-300 rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Prezime"
                className="p-3 border-2 border-gray-300 rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Broj Telefona"
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
