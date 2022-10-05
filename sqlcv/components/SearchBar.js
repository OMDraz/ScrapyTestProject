import React from "react";

export default function SearchBar() {
  return (
    <div class="min-h-screen bg-gray-900 flex justify-center items-center">
      <form>
        <h1 class="text-center font-bold text-white text-4xl">
          Search a stock to find the best time to purchase it
        </h1>
        <p class="mx-auto font-normal text-sm my-6 max-w-lg>Enter your domain name and choose any extention name"></p>
        <div class="sm:flex items-center bg-gray-700 rounded-lg overflow-hidden px-2 py-1 justify-between">
          <input
            class="text-base flex-grow outline-none px-2"
            type="text"
            placeholder="Search your domain name"
          ></input>
          <div class="ms:flex items-center px-2 rounded-lg space-x-r mx-auto">
            <select
              id="Com"
              class="text-base outline-none border-2 px-4 py-2 rounded-lg"
            >
              <option value="com" selected>
                com
              </option>
              <option value="net">net</option>
              <option value="org">org</option>
              <option value="io">io</option>
            </select>
            <button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
