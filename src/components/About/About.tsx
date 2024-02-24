import "./About.css";
import banner from "../../assets/about_banner.png";
import arrow from "../../assets/icons/Aerrow.png";
import about1 from "../../assets/icons/about1.png";
import about2 from "../../assets/icons/about2.png";
function AboutBanner() {
  return (
    <div className="about__container">
      <div className="about-image">
        <img src={banner} alt="about banner" />
      </div>
      <div className="about-content">
        <p>About Us</p>
        <h3>We Believe in Working Accredited Farmers</h3>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="about-details">
          <img src={about1} alt="" />
          <div className="details-text">
            <h4>Organic Foods Only</h4>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>

        <div className="about-details">
          <img src={about2} alt="" />
          <div className="details-text">
            <h4>Quality Standards</h4>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <button>
          Shop Now <img src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
}

export default AboutBanner;
