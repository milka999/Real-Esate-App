import {Link} from "react-router-dom";
/* eslint-disable react/prop-types */
export default function Sorting() {
  return (
    <div>
      <div>
        <select className="p-2 rounded-md border-2 border-black m-2">
          <option key="Bez Sortiranja" value="Bez Soritranja">
           Bez Sortiranja
          </option>
          <option key="price_asc" value="price_asc"> <Link to="/?sort=price_asc">Cijena</Link>
          </option>
          <option key="price_desc" value="price_desc">
            <Link to="/?sort=price_desc">Cijena (opadajuce)</Link>
          </option>
          <option key="size_asc" value="size_asc">
            <Link to="/?sort=size_asc">Kvadratura</Link>
          </option>
          <option key="size_desc" value="size_desc">
            <Link to="/?sort=size_desc">Kvadratura (opadajuce)</Link>
          </option>
        </select>
      </div>
    </div>
  );
}
