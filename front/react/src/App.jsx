import "./App.css";
import ListingSmall from "../components/ListingSmall";
import Navbar from "../components/Navbar";
import Sorting from "../components/Sorting";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/listings/sale")
      .then((response) => {
        console.log(response.data);
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sorting brOglasa={3} />
      <hr />
      <Filters />
      {listings.map((listing) => (
        <ListingSmall key={listing.id} listing={listing} />
      ))}
      <Footer />
    </>
  );
}

export default App;
