import "./App.css";
import ListingSmall from "../components/ListingSmall";
import Navbar from "../components/Navbar";
import Sorting from "../components/Sorting";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Get the query parameters
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    // Build the API endpoint based on the "type" parameter
    let apiUrl = "http://localhost:3000/api/v1/listings";
    if (type) {
      apiUrl += `?type=${type}`;
    }
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setListings(response.data);
        setCount(listings.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [listings.length, location.search]);

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="mt-5">
          <Sorting brOglasa={3} />
          <hr className="my-4" />
          <Filters />
        </div>

        {/* Main content */}
        <div className="flex flex-col  m-5">
          <p className="ml-2 mb-2">
            Pronađeno ukupno <b>{count}</b> oglasa{" "}
          </p>
          <div className="flex">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {listings.map((listing) => (
                <ListingSmall key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
