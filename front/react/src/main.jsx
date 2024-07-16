import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../components/Login.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Register from "../components/Register.jsx";
import Listing from "../components/Listing.jsx";
import Carousel from "../components/Carousel.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/:id",
    element: <Listing />,
  },
  {
    path: "/slike",
    element: <Carousel />,
  },
  /*
  {
    path: "/newListing",
    element: <NewListing />,
  },
  {
    path: "/edit/:listingId",
    element: <EditListing />,
  },
  {
    path: "/delete/:listingId",
    element: <DeleteListing />,
  }, */
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
