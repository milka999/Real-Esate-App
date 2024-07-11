// import { useState } from 'react'
import './App.css'
import ListingSmall from '../components/ListingSmall'
import Navbar from '../components/Navbar'
import Sorting from '../components/Sorting'
import Filters from '../components/Filters'
import EditListing from '../components/EditListing'

function App() {
  return (
    <>
      <Navbar/>
      <Sorting brOglasa={3}/>
      <Filters/>
      <ListingSmall listing={{
        imgUrl: "../public/vite.svg",
        title: "Stan za Izdavanje",
        location: "Stari Aerodrom, Podgorica",
        price:"200€"
      }}/>
      <ListingSmall listing={{
        imgUrl: "../public/vite.svg",
        title: "Stan za Izdavanje",
        location: "Stari Aerodrom, Podgorica",
        price:"200€"
      }}/>
      <ListingSmall listing={{
        imgUrl: "../public/vite.svg",
        title: "Stan za Izdavanje",
        location: "Stari Aerodrom, Podgorica",
        price:"200€"
      }}/>
      <EditListing />
    </>
  )
}

export default App
