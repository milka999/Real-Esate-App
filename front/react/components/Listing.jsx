/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

const listings = [
  {
    id: 1,
    title: "Listing 1",
    price: "$100",
    location: "New York",
    imgUrl: "image1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    contact: "123456789",
    date: "2023-07-12",
  },
  {
    id: 2,
    title: "Listing 2",
    price: "$200",
    location: "Los Angeles",
    imgUrl: "image2.jpg",
    description: "Description 2",
    contact: "987654321",
    date: "2023-07-11",
  },
];

export default function Listing() {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === parseInt(id));

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
