import "./Loader.css";
import Pokeball from "../../../assets/pokeball.svg";

export default function Loader() {
  return (
    <div className="loader">
      <img src={Pokeball} alt="pokeball" />
    </div>
  );
}
