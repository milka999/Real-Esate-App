export default function Listing({listing}){
    return (
        <div className="listing">
            <h2>{listing.title}</h2>
            {/* odje će neki carousel sa slikama da bude - to je component */}
            <h3>Opis</h3>
            <p>{listing.description}</p>
            <h2>Osnovne karakteristike</h2>
            <ul>
                <li>Lokacija: {listing.location}</li>
                <li>Broj Soba: {listing.numberOfRooms}</li>
                <li>Broj Kupatila: {listing.numberOfBathrooms}</li>
                <li>Kvadratura {listing.size}</li>
                <li>Cijena: {listing.price}</li>
            </ul>
            <h2>Kontakt telefon: </h2>
        </div>
    )
}