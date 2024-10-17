import "rc-slider/assets/index.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Filters({
                                  filterType,
                                  setFilterType,
                                  filterLocation,
                                  setFilterLocation,
                                  minPrice,
                                  setMinPrice,
                                  maxPrice,
                                  setMaxPrice,
                                  minUnitSize,
                                  setMinUnitSize,
                                  maxUnitSize,
                                  setMaxUnitSize,
                                  resetFilters,
                                }) {
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);

  const handleCityChange = (event) => {
    const selectedCityId = Number(event.target.value);
    if (selectedCityId) {
      axios
          .get(`http://localhost:3000/api/v1/city/${selectedCityId}/location`)
          .then((response) => setLocations(response.data))
          .catch((error) => console.error("Error fetching locations:", error));
    }
  };

  useEffect(() => {
    axios
        .get("http://localhost:3000/api/v1/cities")
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  return (
      <div className="h-screen w-[400px] ml-4 mr-4">
        <div className="h-full flex flex-col shadow-sm">
          <div className="flex flex-row justify-between ml-2 mb-5 mt-5">
            <p>Filteri</p>
            <button
                type="reset"
                className="border-2 border-black rounded-md p-0.5 hover:text-gray-500"
                onClick={resetFilters}
            >
              Resetuj Filtere
            </button>
          </div>
          <form>
            <div>
              <select
                  name="city"
                  onChange={handleCityChange}
                  className="p-2 rounded-md border-2 border-black m-2"
              >
                {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                ))}
              </select>

              <select
                  name="location"
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(Number(e.target.value))}
                  className="p-2 rounded-md border-2 border-black m-2"
              >
                {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                ))}
              </select>

              <p className="m-2">Tip nekretnine</p>
              <div className="flex flex-row space-x-3 m-2">
                <label htmlFor="stan">Stan</label>
                <input
                    type="radio"
                    name="type"
                    value={1}
                    id="stan"
                    checked={filterType === 1}
                    onChange={() => setFilterType(1)}
                />
              </div>

              <div className="flex flex-row space-x-3 m-2">
                <label htmlFor="kuca">Kuća</label>
                <input
                    type="radio"
                    name="type"
                    value={2}
                    id="kuca"
                    checked={filterType === 2}
                    onChange={() => setFilterType(2)}
                />
              </div>

              <p className="m-2">Cijena: </p>
              <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="border-2 border-black rounded-md p-2 m-2"
              />
              <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="border-2 border-black rounded-md p-2 m-2"
              />
              <p className="ml-2">Kvadartura:</p>
              <input
                  type="number"
                  value={minUnitSize}
                  onChange={(e) => setMinUnitSize(Number(e.target.value))}
                  className="border-2 border-black rounded-md p-2 m-2"
              />
              <input
                  type="number"
                  value={maxUnitSize}
                  onChange={(e) => setMaxUnitSize(Number(e.target.value))}
                  className="border-2 border-black rounded-md p-2 m-2"
              />
            </div>
          </form>
        </div>
      </div>
  );
}
