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
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/6 bg-gray-100 p-4">
          <Sorting brOglasa={3} />
          <hr className="my-4" />
          <Filters />
        </div>

        {/* Main content */}
        <div className="w-5/6 p-4">
          {listings.map((listing) => (
            <ListingSmall key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
