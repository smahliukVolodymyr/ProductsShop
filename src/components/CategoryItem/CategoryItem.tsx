import "./CategoryItem.css";
type CategoryItemProps = {
  img: string;
  text: string;
};
function CategoryItem({ img, text }: CategoryItemProps) {
  return (
    <div className="img__container">
      <img src={img} alt="nuts" />
      <button>{text}</button>
    </div>
  );
}

export default CategoryItem;
