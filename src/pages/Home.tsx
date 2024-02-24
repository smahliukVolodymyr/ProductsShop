import AboutBanner from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Items from "../components/Items/Items";
import Feedback from "../components/Feedback/Feedback";
import Navbar from "../components/Navbar/Navbar";
import Offers from "../components/Offers/Offers";
import StoreOffers from "../components/ProductsOffers/ProductsOffers";
import Categories from "../components/Categories/Categories";
import EcoFriendly from "../components/EcoFriendly/EcoFriendly";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Offers />
      <AboutBanner />
      <Items />
      <Feedback />
      <StoreOffers />
      <EcoFriendly />
      <Categories />
    </>
  );
}

export default Home;
