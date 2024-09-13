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
    <>
      <Navbar />
      <div className="flex flex-col m-5">
        <h1 className="text-2xl">{listing.title}</h1>
        <div className="listing-info">
          {/*  <Carousel /> */}
          <img src={listing.img_url} className="mt-5 mb-5"></img>
          <p className="font-light">{listing.description}</p>
          <div className="flex flex-col p-4 mt-2">
            <h2 className="text-lg font-semibold mt-5 mb-2">
              Osnovne karakteristike
            </h2>
            <ul>
              <li>Lokacija: {listing.location}</li>
              <li>Broj Soba: {listing.numberOfRooms}</li>
              <li>Broj Kupatila: {listing.numberOfBathrooms}</li>
              <li>Kvadratura {listing.size}</li>
              <li>Cijena: {listing.price}€</li>
              <li>Kontakt telefon: {listing.contact}</li>
            </ul>
          </div>
        </div>
        <div className="">
          <form>
            <div className="border-2 border-gray-500 rounded-md flex flex-col p-4">
              <h3>Pošaljite upit</h3>
              <input
                type="text"
                placeholder="Ime"
                className="p-3 border-2 border-gray-400 rounded-md m-2 mt"
              />
              <input
                type="text"
                placeholder="Prezime"
                className="p-3 border-2 border-gray-400 rounded-md m-2"
              />
              {/* fali validacija za broj telefona */}
              <input
                type="text"
                placeholder="Broj Telefona"
                className="p-3 border-2 border-gray-400 rounded-md m-2"
              />
              <textarea
                className="p-3 border-2 border-gray-400 rounded-md m-2"
                placeholder="Dodatne informacije"
              ></textarea>
              <button className="bg-green-600 rounded-md text-black p-2 hover:bg-black hover:text-white hover:border-green-600 hover:border-solid hover:border-2 w-1/3 mx-auto m-2">
                Pošalji
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
