import "./App.css";
import ListingSmall from "../components/ListingSmall";
import Navbar from "../components/Navbar";
import Sorting from "../components/Sorting";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

const listings = [
  {
    id: 1,
    title: "Listing 1",
    price: "$100",
    location: "New York",
    imgUrl: "image1.jpg",
    description: "Description 1",
    contact: "123456789",
    date: "2023-07-12",
  },
  {
    id: 2,
    title: "Listing 2",
    price: "$200",
    location: "Los Angeles",
    imgUrl: "image2.jpg",
    description: "Description 2",
    contact: "987654321",
    date: "2023-07-11",
  },
];

function App() {
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
