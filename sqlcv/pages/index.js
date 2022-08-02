import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class="container min-h-screen max-w-screen-xl	 grid grid-cols-6 row-6">
      <div class="col-span-6 space-x-24">
        <div class="display:inline-block">logo</div>
        <div class="display:inline-block float-right">upload csv</div>
        <div class="display:inline-block float-right">about</div>
        <div class="display:inline-block float-right">contact us</div>
      </div>
      <div class="col-span-3 row-span-4">text</div>
      <div class="col-span-3 row-span-4">picture</div>
      <div class="col-span-6">footer</div>
    </div>
  );
}
