import "./Card.css";
import Pokeball from "../../../assets/pokeball.svg";
import { UseQueryResult } from "@tanstack/react-query";
import { PokemonProps } from "../../../types";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import Loader from "../Loader/Loader";

export default function Card(pkm: UseQueryResult<PokemonProps, unknown>) {
  if (pkm.isError || pkm.isRefetchError)
    return <ErrorHandler err={pkm.error} />;

  if (pkm.isLoading || pkm.isFetching || pkm.isRefetching)
    return (
      <div className="card-container">
        <Loader />
      </div>
    );

  const pokemonData = pkm.data;

  return (
    <div className="card-container">
      <img className="card-icon" src={Pokeball} alt="pokeball" />
      {
        <div className="card-content">
          <div>{pokemonData.id}</div>
          <div>{pokemonData.name}</div>
          {pokemonData.sprites && pokemonData.sprites.front_default && (
            <img
              className="pokemon-sprite"
              src={pokemonData.sprites.front_default}
              alt={`sprite_${pokemonData.name}`}
            />
          )}
        </div>
      }
    </div>
  );
}
