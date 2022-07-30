import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scraping Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>

      <nav>
        <div class="container mx-auto px-6 py-2 flex justify-between items-center">
          <a class="font-bold text-2xl lg:text-4xl" href="#">
            Scrapy - you're one stop shop to scrape a website
          </a>
          <div class="blog lg:hidden">
            <button class="flex items-center px-3 py-2 border rouned text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                class="fill-current h-3 w-3"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <li>
                <a class="px-4 font-bold" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="px-4 hover:text-gray-800" href="/">
                  About
                </a>
              </li>
              <li>
                <a class="px-4 hover:text-gray-800" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
