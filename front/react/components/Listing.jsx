/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
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
      <h1 id="listing-title">{listing.title}</h1>
      <div className="listing">
        <div className="listing-info">
          <Carousel />
          <p>{listing.description}</p>
          <h2>Osnovne karakteristike</h2>
          <ul>
            <li>Lokacija: {listing.location}</li>
            {/* <li>Broj Soba: {listing.numberOfRooms}</li>
        <li>Broj Kupatila: {listing.numberOfBathrooms}</li>
        <li>Kvadratura {listing.size}</li> */}
            <li>Cijena: {listing.price}</li>
          </ul>
          <h2>Kontakt telefon: {listing.contact} </h2>
        </div>
        <div className="listing-contact">
          <form>
            <div className="listing-contact-container">
              <h3>Pošaljite upit</h3>
              <input type="text" placeholder="Ime" />
              <input type="text" placeholder="Prezime" />
              {/* fali validacija za broj telefona */}
              <input type="text" placeholder="Broj Telefona" />
              <textarea></textarea>
              <button className="btn-blue">Pošalji</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
