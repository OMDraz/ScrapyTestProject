import Navigation from "../components/Navigation";
import FooterNavigation from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <FooterNavigation />
    </div>
  );
}
