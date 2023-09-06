import "./Card.css";
import Pokeball from "../../assets/pokeball.svg";
import { PokemonBasicProps, rootUrlReturn } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { getPokemonByURL } from "../../api/pokemonRoutes";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { useEffect } from "react";

export default function Card(props: rootUrlReturn) {
  const {
    data: pokemonData,
    isLoading,
    isError,
    error,
  } = useQuery({
    enabled: props.url != null,
    queryKey: ["pkm", props.name],
    queryFn: () => getPokemonByURL(props.name, props.url),
  });

  useEffect(() => {
    if (isLoading)
      document.querySelector(".card-icon")?.classList.add("rotate");
    else document.querySelector(".card-icon")?.classList.remove("rotate");
  }, [isLoading]);

  if (isError) return <ErrorHandler err={error} />;

  return (
    <div className="card-container">
      <img className="card-icon" src={Pokeball} alt="pokeball" />
      {!isLoading && (
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
      )}
    </div>
  );
}
