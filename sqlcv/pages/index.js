import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({ isConnected }) {
  return (
    <div class="container bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 min-h-screen max-w-screen-xl grid grid-cols-6 row-8">
      <nav class="col-span-6 bg-gradient-to-r from-blue-400 to-blue-600 space-x-24 shadow md:flex md:items-center: md:justify-between">
        <div>
          <span class="text-2xl font-[Poppins]" cursor-pointer>
            SQLCV
          </span>
        </div>
        <ul class="md:flex md:items-center">
          <li>
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">
              Upload
            </a>
          </li>
          <li>
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/login" class="text-xl hover:text-cyan-500 duration-500">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div class="col-span-5 row-span-6 pl-14">
        <h1 class="pt-24 font-roboto text-6xl">
          The easiest way to create SQL tables
        </h1>
        <h1 class="pt-6 text-2xl">
          Transform CSVs into SQL code to create tables in seconds rather than
          minutes for free. Just follow these three steps
        </h1>
        <ol class="py-2">
          <li class="py-4">1. Upload a CSV with columns and data</li>
          <li class="py-4">
            2. Decide what data type you want for each column, along with table
            name
          </li>
          <li class="py-4">
            3. Copy the generated code into your SQL server and run it!
          </li>
        </ol>
      </div>
      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
      <footer class="col-span-6 rounded-lg md:flex md:items-center md:justify-between bg-gradient-to-r from-blue-400 to-blue-600">
        footer
      </footer>
    </div>
  );
}
