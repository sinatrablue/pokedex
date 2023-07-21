import "./Card.css";
import Pokeball from "../../assets/pokeball.svg";

export default function Card(props: CardProps) {
  return (
    <div className="card-container">
      <img className="card-icon" src={Pokeball} alt="pokeball" />
      <div className="card-content">{props.content}</div>
    </div>
  );
}
