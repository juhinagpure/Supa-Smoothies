import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const smoothieCard = ({ smoothie }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id);
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="smoothie-card">
      <h2>{smoothie.title}</h2>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};
export default smoothieCard;
