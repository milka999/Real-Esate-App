//import Multiselect from 'multiselect-react-dropdown'
import { useState } from "react";
export default function Filters(){

    const cities = [
        {
            id: 1,
            name: 'Podgorica',
            checked: false
        },
        {
            id: 2,
            name: 'Nikšić',
            checked: false
        }
    ];

    const neigborhoods = [
        {
            id: 1,
            name: 'Blok 5',
            city_id: 1,
            checked: false
        },
        {
            id: 2,
            name: 'Zabjelo',
            city_id: 1,
            checked: false
        },
        {
            id: 3,
            name: 'Palestina',
            city_id : 2,
            checked: false
        },
        {
            id: 4,
            name: 'Rastoci',
            city_id: 2,
            checked: false
        }
    ];

    const [citiesList, setCitiesList] = useState(cities);

    function handleToggle(cityId){
        const list = [...citiesList];
        const city = list.find(
            c => c.id === cityId
        );
        city.checked = !city.checked;
        setCitiesList(list);
        console.log(cities);
    }

    {/* TODO: makni ove čekboxove i zamijeni sa multiselct dropdown-om */}

    const cityCheckboxes = cities.map(city => <><input type="checkbox" value={city.id} id={city.id} onToggle={() => handleToggle(city.id)}/><label htmlFor={city.id}>{city.name}</label></>);
    const neigborhoodsFiltered = neigborhoods.filter(hood => hood.city_id === 2);
    const neigborhoodscheck = neigborhoodsFiltered.map(hood => <><input type="checkbox" value={hood.id} id={hood.id}/><label htmlFor={hood.id}>{hood.name}</label></>)

    return (
        <div className="filters">
            <form>
                <h3>Opština</h3>
                <div className="checkboxes">
                    {cityCheckboxes}
                </div>

                {/* biće kodniciono da se renderuje zavisno od grada koji je odabran */}
                <h3>Naselje</h3>
                <div className="checkboxes">
                    {neigborhoodscheck}
                </div>
            </form>
        </div>
    )
}