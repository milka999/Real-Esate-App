import "rc-slider/assets/index.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Filters() {
  const [type, setType] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/cities")
      .then((response) => {
        console.log(response.data);
        setCities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // trebaće da se promijene sve ove funkcije da bi slale odgovarajuće vrijednost back-u

  return (
    <div className="h-screen w-[400px] ml-4 mr-4">
      <div className="h-full flex flex-col shadow-sm">
        <div className="flex flex-row justify-between ml-2 mb-5 mt-5">
          <p>Filteri</p>
          <button
            type="reset"
            className="border-2 border-black rounded-md p-0.5 hover:text-gray-500"
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
              {/* <option value="" disabled selected>
              Grad
            </option> */}
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>

            <select
              name="location"
              value={location}
              onChange={(e) => setLocation(Number(e.target.value))}
              className="p-2 rounded-md border-2 border-black m-2"
            >
              {/* <option value="" disabled selected>
              Naselje
            </option> */}
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
                checked={type === 1}
                onChange={() => setType(1)}
              />
            </div>

            <div className="flex flex-row space-x-3 m-2">
              <label htmlFor="kuca">Kuća</label>
              <input
                type="radio"
                name="type"
                value={2}
                id="kuca"
                checked={type === 2}
                onChange={() => setType(2)}
              />
            </div>
            <div className="flex flex-row space-x-3 m-2">
              <label htmlFor="poslovni-prostor">Poslovni prostor</label>
              <input
                type="radio"
                name="type"
                value={3}
                id="poslovni-prostor"
                checked={type === 3}
                onChange={() => setType(3)}
              />
            </div>
            <div className="flex flex-row space-x-3 m-2">
              <label htmlFor="plac">Plac</label>
              <input
                type="radio"
                name="type"
                value={4}
                id="plac"
                checked={type === 4}
                onChange={() => setType(4)}
              />
            </div>
          </div>
          <div className="sliders">
            <div>
              <p className="ml-2">Cijena ili visina mjesečne rente:</p>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border-2 border-black rounded-md p-2 m-2"
              />
              <p className="ml-2">Kvadartura:</p>
              <input
                type="number"
                value={unitSize}
                onChange={(e) => setUnitSize(Number(e.target.value))}
                className="border-2 border-black rounded-md p-2 m-2"
              />
            </div>
            <div className="m-2">
              <button
                type="submit"
                className="bg-green-500 border-2 border-black rounded-md p-0.5 hover:border-green-500"
              >
                Filtriraj
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
