import "./ItemCard.css";
import stars from "../../assets/icons/Star.png";
type ItemCardProps = {
  type: string;
  name: string;
  oldPrice: number;
  price: number;
  img: string;
};
function ItemCard({ type, name, oldPrice, price, img }: ItemCardProps) {
  return (
    <div className="itemcard__container">
      <span>{type}</span>
      <img src={img} alt="item" />
      <h4>{name}</h4>
      <div className="itemcard-bottom">
        <div className="itemcard-price">
          <p>${oldPrice.toFixed(2)}</p>
          <p>${price.toFixed(2)}</p>
        </div>
        <img src={stars} alt="rating" />
      </div>
    </div>
  );
}

export default ItemCard;
