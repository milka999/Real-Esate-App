import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
  const [locations, setLocations] = useState([]);
  const [structures, setStructures] = useState([]);

  const [userId, setUserId] = useState(null); // To store author (user) ID
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details (like user ID) from local storage or context
    const token = localStorage.getItem("authToken"); // Assuming you store the token in local storage
    if (!token) {
      // If no token, redirect to login
      navigate("/login");
    } else {
      // Decode the token to get the user information (author ID)
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUserId(decodedToken.userId); // Set the user ID (author ID)
    }

    // Fetch cities and structures on mount
    axios
      .get("http://localhost:3000/api/v1/cities")
      .then((response) => setCities(response.data))
      .catch((error) => console.error(error));

    axios
      .get("http://localhost:3000/api/v1/structures")
      .then((response) => setStructures(response.data))
      .catch((error) => console.error(error));
  }, [navigate]);

  const handleCityChange = (event) => {
    const selectedCityId = event.target.value;
    if (selectedCityId) {
      axios
        .get(`http://localhost:3000/api/v1/city/${selectedCityId}/location`)
        .then((response) => setLocations(response.data))
        .catch((error) => console.error("Error fetching locations:", error));
    }
  };

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
    formData.append("author_id", userId);
    formData.append("imgUrl", imgUrl);

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

  function uploadImage() {
    const res = axios
      .post("http://localhost:3000/api/v1/other/img", selectedImage, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(console.log("File uploaded successfuly"))
      .catch((error) => console.log(error));

    setImgUrl(res.data.fileLocation);
  }

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-semibold text-center mt-6">Novi oglas</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-1/2 mx-auto mt-6"
        >
          <input
            type="text"
            placeholder="Naziv objekta"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-black rounded-md p-2 m-2"
          />
          <textarea
            placeholder="Opis"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-black rounded-md p-2 m-2"
          />
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
          <p className="m-2">Da li uz objekat dolazi i parking mjesto?</p>
          <div className="flex flex-row justify-around m-2">
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
          </div>

          <p className="m-2">Da li objekat ima svoju baštu</p>
          <div className="flex flex-row justify-around m-2">
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
          </div>
          <p className="m-2">Da li objekat ima terasu</p>
          <div className="flex flex-row justify-around m-2">
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
          </div>

          <select
            name="city"
            onChange={handleCityChange}
            className="p-2 rounded-md border-2 border-black m-2"
          >
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
            className="p-2 rounded-md border-2 border-black m-2"
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

          <p className="m-2">Namjena oglasa</p>
          <div className="flex flex-row space-x-3 m-2">
            <label htmlFor="izdavanje">Izdavanje</label>
            <input
              type="radio"
              name="listingType"
              value={2}
              id="izdavanje"
              checked={listingType === 2}
              onChange={() => setListingType(2)}
            />
          </div>
          <div className="flex flex-row space-x-3 m-2">
            <label htmlFor="prodaja">Prodaja</label>
            <input
              type="radio"
              name="listingType"
              value={1}
              id="prodaja"
              checked={listingType === 1}
              onChange={() => setListingType(1)}
            />
          </div>

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

          <select
            name="structure"
            value={structure}
            onChange={(e) => setStructure(Number(e.target.value))}
            className="p-2 rounded-md border-2 border-black m-2"
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
          <p className="m-2">Upload slika: </p>
          <input
            className="m-2"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setSelectedImage(e.target.files[0]);
                uploadImage();
              }
            }}
          />

          <button
            type="submit"
            className="bg-green-500 border-2 border-black rounded-md p-0.5 hover:border-green-500 mb-10"
          >
            Pošalji
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
