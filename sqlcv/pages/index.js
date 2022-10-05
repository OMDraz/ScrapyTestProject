import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Navigation from "../components/Navigation";
import FooterNavigation from "../components/Footer";
import SearchBar from "../components/SearchBar";

export async function getServerSideProps(context) {
  let res = await fetch("https://api.aletheiaapi.com/StockData?symbol=msft", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      key: process.env.ALETHIA_KEY,
      "Accept-Version": 2,
    },
  });
  let data = await res.json();
  console.log(JSON.stringify(data));
  return {
    props: { data },
  };
}

export default function Home() {
  return (
    <div class="grid-cols-1 grid-rows-6">
      <Navigation />
      <SearchBar />
      <FooterNavigation />
    </div>
  );
}
