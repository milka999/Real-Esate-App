/* eslint-disable react/prop-types */
export default function Sorting({brOglasa}){
    return (
        <div className="sorting">
            <p>Pronađeno ukupno {brOglasa} oglasa</p>
            <div>
            <p>Sortiraj: </p>
            <button>Bez Sortiranja</button>
            </div>
        </div>
    );
}