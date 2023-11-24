import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./PokemonList.css";
import { PokemonListProps } from "../../../types";

export default function PokemonList({
  data: pokemonsFetchResults,
  isListLoading,
}: PokemonListProps) {
  if (isListLoading) return <Loader />;

  return (
    <>
      <div className="list-container">
        {pokemonsFetchResults.map(pkm => (
          <Card {...pkm} />
        ))}
      </div>
    </>
  );
}
