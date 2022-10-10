import React from "react";

export async function SearchAPI(data) {
  let res = await fetch(
    `https://api.aletheiaapi.com/StockData?symbol=${data}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        key: "0DAC2C378CF94AFC862A9ACE2CFFBBD9",
        "Accept-Version": 2,
      },
    }
  );

  let stockData = await res.json();

  return stockData;
}
