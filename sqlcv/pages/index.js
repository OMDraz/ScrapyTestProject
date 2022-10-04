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
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();
  return {
    props: { allPosts },
  };
}

export default function Home({ allPosts }) {
  let data = Array.from(allPosts.data);

  return (
    <div class="grid-cols-1 grid-rows-6">
      <Navigation />
      <SearchBar />
      <FooterNavigation />
    </div>
  );
}
