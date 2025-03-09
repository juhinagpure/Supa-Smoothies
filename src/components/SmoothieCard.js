import { Link } from "react-router-dom";

const smoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h2>{smoothie.title}</h2>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};
export default smoothieCard;
