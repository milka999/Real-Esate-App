//import Multiselect from 'multiselect-react-dropdown'
import Multiselect from "multiselect-react-dropdown";
import "rc-slider/assets/index.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Filters() {
  const [propertyType, setPropertyType] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/types")
      .then((response) => {
        console.log(response.data);
        setPropertyType(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const [locations, setLocations] = useState([]);

  const [selectedValueCity, setSelectedValueCity] = useState({});
  const [selectedValueLocation, setSelectedValueLocation] = useState({});
  const [selectedValueType, setSelectedValueType] = useState({});

  // trebaće da se promijene sve ove funkcije da bi slale odgovarajuće vrijednost back-u
  const onSelectCity = (selectedList) => {
    if (selectedList.length > 0) {
      const cityId = selectedList[0].id;
      axios
        .get(`http://localhost:3000/api/v1/city/${cityId}/location`)
        .then((response) => {
          setLocations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    } else {
      setLocations([]);
    }
  };

  function onRemoveCity() {
    setSelectedValueCity({});
  }

  function onSelectLocation() {
    setSelectedValueLocation({});
  }

  function onRemoveLocation() {
    setSelectedValueLocation({});
  }

  function onSelectType() {
    setSelectedValueType({});
  }

  function onRemoveType() {
    setSelectedValueType({});
  }

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
            <div>
              <Multiselect
                options={cities}
                selectedValues={selectedValueCity}
                onSelect={onSelectCity}
                onRemove={onRemoveCity}
                displayValue="name"
                placeholder="Odaberite grad"
                className="border-2 border-black rounded-lg m-2"
              />
            </div>
            <div>
              <Multiselect
                options={locations}
                selectedValues={selectedValueLocation}
                onSelect={onSelectLocation}
                onRemove={onRemoveLocation}
                displayValue="name"
                placeholder="Odaberite naselje"
                className="border-2 border-black rounded-lg m-2"
              />
            </div>
            <div>
              <Multiselect
                options={propertyType}
                selectedValues={selectedValueType}
                onSelect={onSelectType}
                onRemove={onRemoveType}
                displayValue="name"
                placeholder="Tip nekretnine"
                className="border-2 border-black rounded-lg m-2"
              />
            </div>
            <div>
              <Multiselect
                options={propertyType}
                selectedValues={selectedValueType}
                onSelect={onSelectType}
                onRemove={onRemoveType}
                displayValue="name"
                placeholder="Struktura stana"
                className="border-2 border-black rounded-lg m-2"
              />
            </div>
          </div>
          <div className="sliders">
            <div>
              <div>
                <p className="m-2">Cijena: </p>
                <input
                  className="border-2 border-black rounded-lg m-2 p-1"
                  placeholder="Najniža"
                  type="number"
                />
                <input
                  className="border-2 border-black rounded-lg m-2 p-1"
                  placeholder="Najviša"
                  type="number"
                />
              </div>
              <div>
                <p className="m-2">Kvadratura: </p>
                <input
                  className="border-2 border-black rounded-lg m-2 p-1"
                  placeholder="Najniža"
                  type="number"
                />
                <input
                  className="border-2 border-black rounded-lg m-2 p-1"
                  placeholder="Najviša"
                  type="number"
                />
              </div>
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
