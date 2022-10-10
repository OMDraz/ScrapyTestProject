import React from "react";
import Navigation from "../../components/Navigation";
import FooterNavigation from "../../components/Footer";
import TableLayout from "../../components/TableLayout";
import { SearchAPI } from "../api/search";

export default function StockSymbol(stockData) {
  return (
    <div>
      <Navigation />
      <TableLayout data={stockData} />
      <FooterNavigation />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const stockData = await SearchAPI(params.symbol);
  return {
    props: {
      stockData,
    },
  };
}
