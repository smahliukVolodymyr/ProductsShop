import "./ProductsOffers.css";
import ItemCard from "../ItemCard/ItemCard";
import img1 from "../../assets/items/cabbage.png";
import arrow from "../../assets/icons/Aerrow.png";
function StoreOffers() {
  return (
    <div className="store__container">
      <span className="header">Offer</span>
      <div className="offers-headers">
        <h2>We Offer Organic For You</h2>
        <button>
          View All Product <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="products__container">
        <ItemCard
          type="Vegetable"
          name="Calabrese Broccoli"
          oldPrice={20.0}
          price={13}
          img={img1}
        />
        <ItemCard
          type="Vegetable"
          name="Calabrese Broccoli"
          oldPrice={20.0}
          price={13}
          img={img1}
        />
        <ItemCard
          type="Vegetable"
          name="Calabrese Broccoli"
          oldPrice={20.0}
          price={13}
          img={img1}
        />
        <ItemCard
          type="Vegetable"
          name="Calabrese Broccoli"
          oldPrice={20.0}
          price={13}
          img={img1}
        />
      </div>
    </div>
  );
}

export default StoreOffers;
