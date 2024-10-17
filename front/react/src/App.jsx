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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();

  // States for filters
  const [filterType, setFilterType] = useState(null);
  const [filterLocation, setFilterLocation] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minUnitSize, setMinUnitSize] = useState(0);
  const [maxUnitSize, setMaxUnitSize] = useState(0);

  const [sortType, setSortType] = useState(null);

  const listingsPerPage = 12;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    const userId = params.get("userId");

    let apiUrl = `http://localhost:3000/api/v1/listings?page=${currentPage}&limit=${listingsPerPage}`;

    if (type) {
      apiUrl += `&type=${type}`;
    }

    if (userId) {
      apiUrl += `&author_id=${userId}`;
    }

    // Apply filters
    if (filterType) {
      apiUrl += `&type_id=${filterType}`;
    }
    if (filterLocation) {
      apiUrl += `&location_id=${filterLocation}`;
    }
    if (minPrice) {
      apiUrl += `&min_price=${minPrice}`;
    }
    if (maxPrice) {
      apiUrl += `&max_price=${maxPrice}`;
    }
    if (minUnitSize) {
      apiUrl += `&min_size=${minUnitSize}`;
    }
    if (maxUnitSize) {
      apiUrl += `&max_size=${maxUnitSize}`;
    }

    if(sortType) {
      apiUrl += `&sort=${sortType}`;
    }

    axios
        .get(apiUrl)
        .then((response) => {
          const { listings, total, totalPages } = response.data;
          setListings(listings);
          setCount(total);
          setTotalPages(totalPages);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [currentPage, location.search, filterType, filterLocation, minPrice, maxPrice, minUnitSize, maxUnitSize, sortType]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to reset filters
  const resetFilters = () => {
    setFilterType(null);
    setFilterLocation(null);
    setMinPrice(0);
    setMaxPrice(0);
    setMinUnitSize(0);
    setMaxUnitSize(0);
  };

  return (
      <>
        <Navbar />
        <div className="flex">
          {/* Sidebar */}
          <Filters
              filterType={filterType}
              setFilterType={setFilterType}
              filterLocation={filterLocation}
              setFilterLocation={setFilterLocation}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minUnitSize={minUnitSize}
              setMinUnitSize={setMinUnitSize}
              maxUnitSize={maxUnitSize}
              setMaxUnitSize={setMaxUnitSize}
              resetFilters={resetFilters} // Pass reset filters function
          />

          {/* Main content */}
          <div className="flex flex-col m-5">
            <div className="flex flex-row justify-between mb-4">
              <p className="ml-2 mb-2">
                Pronađeno ukupno <b>{count}</b> oglasa
              </p>
              <Sorting setSortType={setSortType} />
            </div>
            <div className="flex">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {listings.map((listing) => (
                    <ListingSmall key={listing.id} listing={listing} />
                ))}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-5">
              <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="border-2 border-black rounded-md p-2 mx-2"
              >
                Previous
              </button>
              <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
              <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="border-2 border-black rounded-md p-2 mx-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default App;
