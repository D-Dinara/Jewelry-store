function Filters({ data, setJewelry }) {

    const filterJewelry = searchTerm => {
        const filteredResult = [];
        data.forEach(item => {
            item.searchTerm.forEach(term => {
                if (term === searchTerm) {
                    filteredResult.push(item);
                    setJewelry(filteredResult);
                }
            })
        });
    }

    return(
        <div className="filterButtons">
            <button className="filter-btn" onClick={() => filterJewelry("earrings")}>Earrings</button>
            <button className="filter-btn" onClick={() => filterJewelry("bracelets")}>Bracelets</button>
            <button className="filter-btn" onClick={() => filterJewelry("rings")}>Rings</button>
            <button className="filter-btn" onClick={() => filterJewelry("gold")}>Gold</button>
            <button className="filter-btn" onClick={() => filterJewelry("silver")}>Silver</button>
            <button className="filter-btn" onClick={() => filterJewelry("white gold")}>White Gold</button>
            <button className="filter-btn" onClick={() => filterJewelry("gemstones")}>Gemstones</button>
            <button className="filter-btn" onClick={() => filterJewelry("pearls")}>Pearls</button>
            <button className="filter-btn" onClick={() => filterJewelry("wedding rings")}>Wedding rings</button>
            <button className="filter-btn" onClick={() => setJewelry(data)}>All</button>
        </div>
    )
}

export default Filters;