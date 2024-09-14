import axios from "axios";
import { useEffect, useState } from "react";

export default function NewListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [unitSize, setUnitSize] = useState(0);
  const [parking, setParking] = useState(false);
  const [garden, setGarden] = useState(false);
  const [terrace, setTerrace] = useState(false);
  const [location, setLocation] = useState(0);
  const [type, setType] = useState(0);
  const [listingType, setListingType] = useState(0);
  const [structure, setStructure] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Added for image upload

  const [cities, setCities] = useState([]);
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

  const [locations, setLocations] = useState([]);
  const handleCityChange = (event) => {
    const selectedCityId = event.target.value;

    if (selectedCityId) {
      axios
        .get(`http://localhost:3000/api/v1/city/${selectedCityId}/location`)
        .then((response) => {
          setLocations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    }
  };

  const [structures, setStructures] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/structures")
      .then((response) => {
        setStructures(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object for image upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("unitSize", unitSize);
    formData.append("parking", parking);
    formData.append("garden", garden);
    formData.append("terrace", terrace);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("listingType", listingType);
    formData.append("structure", structure);
    if (selectedImage) {
      formData.append("imgUrl", selectedImage); // Append selected image file
    }

    axios
      .post("http://localhost:3000/api/v1/listing/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location = "/";
        }
      })
      .catch((error) => {
        console.error("Upload error:", error);
        window.location = "/uploadError";
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Naziv objekta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cijena ili visina mjesečne rente"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Kvadratura"
          value={unitSize}
          onChange={(e) => setUnitSize(Number(e.target.value))}
        />
        <p>Da li uz objekat dolazi i parking mjesto</p>
        <label htmlFor="parking-true">Da</label>
        <input
          id="parking-true"
          type="radio"
          name="parking"
          value={true}
          checked={parking === true}
          onChange={() => setParking(true)}
        />
        <label htmlFor="parking-false">Ne</label>
        <input
          id="parking-false"
          type="radio"
          name="parking"
          value={false}
          checked={parking === false}
          onChange={() => setParking(false)}
        />

        <p>Da li objekat ima svoju baštu</p>
        <label htmlFor="garden-true">Da</label>
        <input
          id="garden-true"
          type="radio"
          name="garden"
          value={true}
          checked={garden === true}
          onChange={() => setGarden(true)}
        />
        <label htmlFor="garden-false">Ne</label>
        <input
          id="garden-false"
          type="radio"
          name="garden"
          value={false}
          checked={garden === false}
          onChange={() => setGarden(false)}
        />

        <p>Da li objekat ima terasu</p>
        <label htmlFor="terrace-true">Da</label>
        <input
          id="terrace-true"
          type="radio"
          name="terrace"
          value={true}
          checked={terrace === true}
          onChange={() => setTerrace(true)}
        />
        <label htmlFor="terrace-false">Ne</label>
        <input
          id="terrace-false"
          type="radio"
          name="terrace"
          value={false}
          checked={terrace === false}
          onChange={() => setTerrace(false)}
        />

        <select name="city" onChange={handleCityChange}>
          <option value="" disabled selected>
            Grad
          </option>
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
        >
          <option value="" disabled selected>
            Naselje
          </option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.name}
            </option>
          ))}
        </select>

        <p>Namjena oglasa</p>
        <label htmlFor="izdavanje">Izdavanje</label>
        <input
          type="radio"
          name="listingType"
          value={2}
          id="izdavanje"
          checked={listingType === 2}
          onChange={() => setListingType(2)}
        />
        <label htmlFor="prodaja">Prodaja</label>
        <input
          type="radio"
          name="listingType"
          value={1}
          id="prodaja"
          checked={listingType === 1}
          onChange={() => setListingType(1)}
        />

        <p>Tip nekretnine</p>
        <label htmlFor="stan">Stan</label>
        <input
          type="radio"
          name="type"
          value={1}
          id="stan"
          checked={type === 1}
          onChange={() => setType(1)}
        />
        <label htmlFor="kuca">Kuća</label>
        <input
          type="radio"
          name="type"
          value={2}
          id="kuca"
          checked={type === 2}
          onChange={() => setType(2)}
        />
        <label htmlFor="poslovni-prostor">Poslovni prostor</label>
        <input
          type="radio"
          name="type"
          value={3}
          id="poslovni-prostor"
          checked={type === 3}
          onChange={() => setType(3)}
        />
        <label htmlFor="plac">Plac</label>
        <input
          type="radio"
          name="type"
          value={4}
          id="plac"
          checked={type === 4}
          onChange={() => setType(4)}
        />

        <select
          name="structure"
          value={structure}
          onChange={(e) => setStructure(Number(e.target.value))}
        >
          <option value="" disabled selected>
            Struktura objekta
          </option>
          {structures.map((structure) => (
            <option key={structure.id} value={structure.id}>
              {structure.name}
            </option>
          ))}
        </select>
        {/* Image upload field */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setSelectedImage(e.target.files[0]); // Set the selected image file
            }
          }}
        />

        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
}
