import "./Items.css";
import arrow from "../../assets/icons/Aerrow.png";
import ItemCard from "../ItemCard/ItemCard";
import img1 from "../../assets/items/calabrese_broccoli.png";
function Items() {
  return (
    <div className="items__container">
      <div className="items-header">
        <p>Categories</p>
        <h2>Our Products</h2>
      </div>
      <div className="items-catalog">
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
      <button>
        Load More <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default Items;
