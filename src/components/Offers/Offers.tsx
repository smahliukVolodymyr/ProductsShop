import "./Offers.css";
import offer1 from "../../assets/small_banner1.png";
import offer2 from "../../assets/small_banner2.png";
function Offers() {
  return (
    <div className="offers__container">
      <div className="offers-banners">
        <img src={offer1} alt="offer 1" />
        <img src={offer2} alt="offer 2" />
      </div>
    </div>
  );
}

export default Offers;
