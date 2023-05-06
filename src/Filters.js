import { useState } from "react";

function Filters({ data, setJewelry }) {
  const [activeButton, setActiveButton] = useState("all");

  const filterJewelry = (searchTerm) => {
    const filteredResult = data.filter((item) =>
      item.searchTerm.includes(searchTerm)
    );
    setJewelry(filteredResult);
    setActiveButton(searchTerm);
  };

  const buttonClass = (searchTerm) =>
    `filter-btn ${activeButton === searchTerm ? "active-filter" : ""}`;

  return (
    <div className="filterButtons">
       <button className={buttonClass("all")} onClick={() => {
          setJewelry(data);
          setActiveButton("all");
        }}>
        All
      </button>
      <button className={buttonClass("earrings")} onClick={() => filterJewelry("earrings")}>
        Earrings
      </button>
      <button className={buttonClass("bracelets")} onClick={() => filterJewelry("bracelets")}>
        Bracelets
      </button>
      <button className={buttonClass("rings")} onClick={() => filterJewelry("rings")}>
        Rings
      </button>
      <button className={buttonClass("gold")} onClick={() => filterJewelry("gold")}>
        Gold
      </button>
      <button className={buttonClass("silver")} onClick={() => filterJewelry("silver")}>
        Silver
      </button>
      <button className={buttonClass("white gold")} onClick={() => filterJewelry("white gold")}>
        White Gold
      </button>
      <button className={buttonClass("gemstones")} onClick={() => filterJewelry("gemstones")}>
        Gemstones
      </button>
      <button className={buttonClass("pearls")} onClick={() => filterJewelry("pearls")}>
        Pearls
      </button>
      <button className={buttonClass("wedding rings")} onClick={() => filterJewelry("wedding rings")}>
        Wedding rings
      </button>
     
    </div>
  );
}

export default Filters;