import React from "react";
import { SearchAPI } from "../pages/api/search.js";

export default function SearchBar() {
  const [symbol, setSymbol] = React.useState("");

  const handleChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // 👇️ value of input field
    let json = SearchAPI(symbol);
  };

  return (
    <div class="min-h-screen bg-gray-900 flex justify-center items-center">
      <form>
        <h1 class="text-center font-bold text-white text-4xl">
          Search a stock to find the best time to purchase it
        </h1>
        <p class="mx-auto font-normal text-sm my-6 max-w-lg>Enter your domain name and choose any extention name"></p>
        <div class="sm:flex items-center bg-gray-700 rounded-lg overflow-hidden px-2 py-1 justify-between">
          <input
            class="text-base py-2 rounded-lg flex-grow outline-none px-2"
            type="text"
            placeholder="Search your Stock"
            onChange={handleChange}
            value={symbol}
          ></input>
          <div class="ms:flex items-center px-3 rounded-lg space-x-r mx-auto">
            <button
              onClick={handleClick}
              class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2"
            >
              Search Stock
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
