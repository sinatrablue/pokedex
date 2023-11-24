import "./Title.css";
import Pokeball from "../../../assets/pokeball.svg";

export default function Title() {
  return (
    <h1>
      <img src={Pokeball} height={20} alt="pokeball" />
      POKEDEX
      <img src={Pokeball} height={20} alt="pokeball" />
    </h1>
  );
}
