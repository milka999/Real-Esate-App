import { useState } from 'react';
/* eslint-disable react/prop-types */
export default function Sorting({brOglasa}){
    const [open, setOpen] = useState(false);
    const [sortiranje, setSortiranje] = useState('Bez Sortiranja');

    function handleOpen(){
        setOpen(!open);
    }

    function handleSortPriceAsc(){
        //logika za sortiranje - poziv na back
        setSortiranje('Cijena');
        setOpen(false);
    }

    function handleSortSizeAsc(){
        //logika za sortiranje - poziv na back
        setSortiranje('Kvadratura');
        setOpen(false);
    }

    function handleSortPriceDesc(){
        //logika za sortiranje - poziv na back
        setSortiranje('Cijena (opadajuće)');
        setOpen(false);
    }

    function handleSortSizeDesc(){
        //logika za sortiranje - poziv na back
        setSortiranje('Kvadratura (opadajuće)');
        setOpen(false);
    }

    return (
        <div className="sorting">
            <p>Pronađeno ukupno <b> {brOglasa} </b>oglasa</p>
            <div>
            <p>Sortiraj: </p>
            <div>
                <button onClick={handleOpen} className='btn-gray'>{sortiranje}</button>
                {open ? (
                    <ul className="menu">
                    <li className="menu-item">
                        <button onClick={handleSortPriceAsc}>Cijena (rastuće)</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleSortPriceDesc}>Cijena (opadajuće)</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleSortSizeAsc}>Kvadratura (rastuće)</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleSortSizeDesc}>Kvadratura (opadajuće)</button>
                    </li>
                    </ul>
                ) : null}
            </div>
            </div>
        </div>
    );
}