import Card from "../Card/Card";
import "./PokemonList.css";

export default function PokemonList() {
  const pokemons = [
    "gobou",
    "medhyena",
    "zigzaton",
    "goélise",
    "nenupiot",
    "chenipotte",
  ];

  return (
    <div className="list-container">
      {pokemons.map((pkm: string) => (
        <Card content={pkm} />
      ))}
    </div>
  );
}
