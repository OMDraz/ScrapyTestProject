import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="container bg-sky-900 min-h-screen max-w-screen-xl grid grid-cols-6 row-6">
      <div class="bg-slate-900 col-span-6 space-x-24">
        <div class="display:inline-block">logo</div>
        <div class="display:inline-block float-right">upload csv</div>
        <div class="display:inline-block float-right">about</div>
        <div class="display:inline-block float-right">contact us</div>
      </div>
      <div class="col-span-3 row-span-4">
        <h1>The easiest way to create SQL tables</h1>
        <h1>
          Transform CSVs into SQL code to create tables in seconds rather than
          minutes for free. Just follow these three steps
          <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </h1>
      </div>
      <div class="col-span-3 row-span-4">picture</div>
      <div class="bg-slate-900	col-span-6">footer</div>
    </div>
  );
}
