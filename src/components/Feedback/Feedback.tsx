import "./Feedback.css";
import feedback from "../../assets/feedback.jpg";
import avatar from "../../assets/user.png";
import rating from "../../assets/icons/Star.png";
import stat1 from "../../assets/icons/stat1.png";
import stat2 from "../../assets/icons/stat2.png";
import stat3 from "../../assets/icons/stat3.png";
import stat4 from "../../assets/icons/stat4.png";
function Feedback() {
  return (
    <div className="feedback__container">
      <img src={feedback} alt="feedback section background" />
      <div className="feedback-data">
        <div className="feedback-text">
          <span>Testimonial</span>
          <h2>What Our Customer Saying?</h2>
          <img src={avatar} alt="avatar" />
          <img src={rating} alt="rating" />
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h4>Sara Taylor</h4>
          <p>Consumer</p>
          <div className="custom-border"></div>
        </div>
        <div className="feedback-stats">
          <img src={stat1} alt="stats data 1" />
          <img src={stat2} alt="stats data 2" />
          <img src={stat3} alt="stats data 3" />
          <img src={stat4} alt="stats data 4" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
