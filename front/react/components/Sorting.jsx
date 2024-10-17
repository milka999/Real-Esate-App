export default function Sorting({ setSortType }) {
  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  return (
      <div>
        <select
            className="p-2 rounded-md border-2 border-black m-2"
            onChange={handleSortChange}
        >
          <option value="">Bez Sortiranja</option>
          <option value="price_asc">Cijena (rastuce)</option>
          <option value="price_desc">Cijena (opadajuce)</option>
          <option value="size_asc">Kvadratura (rastuce)</option>
          <option value="size_desc">Kvadratura (opadajuce)</option>
        </select>
      </div>
  );
}
