import "./EcoFriendly.css";
import img from "../../assets/eco_friendly.jpg";
import EcoItem from "../EcoItem/EcoItem";
function EcoFriendly() {
  return (
    <div className="eco__container">
      <div className="eco-image">
        <img src={img} alt="" />
      </div>
      <EcoItem />
    </div>
  );
}

export default EcoFriendly;
