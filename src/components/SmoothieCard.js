const smoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h2>{smoothie.title}</h2>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
    </div>
  );
};
export default smoothieCard;
