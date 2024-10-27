import React, { useState } from "react";
import { Card, SearchBox } from ".";
import { drinkList } from "./data";

const ViewDrink = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrinks = drinkList.filter((drink) => {
    // Split the searchTerm into words
    const searchWords = searchTerm.toLowerCase().split(" ");

    // Check if each search word starts with the corresponding letter in drink.name
    return searchWords.every((word, index) =>
      drink.name.toLowerCase().startsWith(word)
    );
  });

  // Function to handle search input change
  const handleSearch = (term) => {
    console.log("Current search term:", term); // Log the current search term
    setSearchTerm(term);
  };

  return (
    <>
      {/* Search box */}
      <div className="items-center max-w-sm mx-auto mt-4 mr-2 ml-2">
        <h2 className="w-full items-center justify-center text-xl font-bold">
          Search for the drink
        </h2>
        <SearchBox onSearch={handleSearch} />
      </div>

      {/* Display the full list of drinks */}
      {!searchTerm && (
        <div>
          {drinkList.map((drink, index) => (
            <Card
              key={index}
              image={drink.image}
              name={drink.name}
              price={drink.price}
            />
          ))}
        </div>
      )}

      {/* Display filtered list only when searchTerm is not empty */}
      {searchTerm && (
        <div>
          {filteredDrinks.map((drink, index) => (
            <Card
              key={index}
              image={drink.image}
              name={drink.name}
              price={drink.price}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ViewDrink;
