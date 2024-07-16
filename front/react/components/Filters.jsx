//import Multiselect from 'multiselect-react-dropdown'
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Filters() {
  const propertyType = [
    { id: 1, name: "Stan" },
    { id: 2, name: "Kuća" },
    { id: 3, name: "Poslovni prostor" },
    { id: 4, name: "Zemljište" },
  ];

  const cities = [
    {
      id: 1,
      name: "Podgorica",
      checked: false,
    },
    {
      id: 2,
      name: "Nikšić",
      checked: false,
    },
  ];

  const neigborhoods = [
    {
      id: 1,
      name: "Blok 5",
      city_id: 1,
      checked: false,
    },
    {
      id: 2,
      name: "Zabjelo",
      city_id: 1,
      checked: false,
    },
    {
      id: 3,
      name: "Palestina",
      city_id: 2,
      checked: false,
    },
    {
      id: 4,
      name: "Rastoci",
      city_id: 2,
      checked: false,
    },
  ];

  const [selectedValueCity, setSelectedValueCity] = useState({});
  const [selectedValueNeigborhood, setSelectedValueNeighborhood] = useState({});
  const [selectedValueType, setSelectedValueType] = useState({});

  // trbaće da se promijene sve ove funkcije da bi slale odgovarajuće vrijednost back-u
  function onSelectCity() {
    setSelectedValueCity({});
  }

  function onRemoveCity() {
    setSelectedValueCity({});
  }

  function onSelectNeigborhood() {
    setSelectedValueNeighborhood({});
  }

  function onRemoveNeighborhood() {
    setSelectedValueNeighborhood({});
  }

  function onSelectType() {
    setSelectedValueType({});
  }

  function onRemoveType() {
    setSelectedValueType({});
  }

  return (
    <div className="filters">
      <form>
        <div id="filters-container">
          <div>
            <Multiselect
              options={cities}
              selectedValues={selectedValueCity}
              onSelect={onSelectCity}
              onRemove={onRemoveCity}
              displayValue="name"
              placeholder="Odaberite grad"
            />
          </div>
          <div>
            <Multiselect
              options={neigborhoods}
              selectedValues={selectedValueNeigborhood}
              onSelect={onSelectNeigborhood}
              onRemove={onRemoveNeighborhood}
              displayValue="name"
              placeholder="Odaberite naselje"
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
            />
          </div>
        </div>
        <div className="sliders">
          <div>
            <div>
              <p>Cijena: </p>
              <Slider range />
              <input className="number-input" type="number" />
              <input className="number-input" type="number" />
            </div>
            <div>
              <p>Kvadratura: </p>
              <Slider range />
              <input className="number-input" type="number" />
              <input className="number-input" type="number" />
            </div>
          </div>
          <div>
            <button type="submit" className="btn-gray">
              Resetuj Filtere
            </button>
            <button type="submit" className="btn-gray">
              Filtriraj
            </button>
          </div>
          {/* biće kodniciono da se renderuje zavisno od grada koji je odabran */}
        </div>
      </form>
    </div>
  );
}
