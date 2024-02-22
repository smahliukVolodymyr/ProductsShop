import "./Banner.css";
import banner from "../../assets/banner.png";
import arrow from "../../assets/icons/Aerrow.png";
import background from "../../assets/background-patterns.png";
function Banner() {
  return (
    <div className="banner__container">
      <img src={banner} alt="banner" />
      <img src={background} alt="background of banner" className="background" />
      <div className="banner-data">
        <p>100% Natural Food</p>
        <h1>Choose the best healthier way of life</h1>
        <button>
          Explore Now <img src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
