import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="container bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 min-h-screen max-w-screen-xl grid grid-cols-6 row-8">
      <header class="col-span-6 md:items-center rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 space-x-24">
        <div class="display:inline-block">logo</div>
        <div class="display:inline-block float-right">upload csv</div>
        <div class="display:inline-block float-right">about</div>
        <div class="display:inline-block float-right">contact us</div>
      </header>
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
      <div class="col-span-2 row-span-6">picture</div>
      <footer class="col-span-6 rounded-lg md:flex md:items-center md:justify-between bg-gradient-to-r from-blue-400 to-blue-600">
        footer
      </footer>
    </div>
  );
}
