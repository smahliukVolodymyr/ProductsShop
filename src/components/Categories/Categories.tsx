import "./Categories.css";
import nuts from "../../assets/nuts.png";
import food from "../../assets/food.png";
import spices from "../../assets/spices.png";
import CategoryItem from "../CategoryItem/CategoryItem";
function Categories() {
  return (
    <div className="categories__container">
      <CategoryItem img={food} text="Organic Food" />
      <CategoryItem img={nuts} text="Nuts" />
      <CategoryItem img={spices} text="Spices" />
    </div>
  );
}

export default Categories;
