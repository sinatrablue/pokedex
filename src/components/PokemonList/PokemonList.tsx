import { useEffect } from "react";
import Card from "../Card/Card";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import Loader from "../Loader/Loader";
import "./PokemonList.css";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../api/pokemonRoutes";
import { rootUrlReturn } from "../../types";
import Button from "../Button/Button";
import LeftArrow from "../../assets/left-direction.svg";
import RightArrow from "../../assets/right-direction.svg";

export default function PokemonList() {
  const {
    data: pokemons,
    isLoading: isListLoading,
    isError: isListError,
    error: listError,
  } = useQuery({
    queryKey: ["pkm"],
    queryFn: getPokemons,
  });

  useEffect(() => {
    console.log("Pokemons retrieved", pokemons);
  }, [pokemons]);

  if (isListLoading) return <Loader />;

  if (isListError) return <ErrorHandler err={listError} />;

  return (
    <>
      <div className="list-container">
        {pokemons.results.map((pkm: rootUrlReturn) => (
          <Card key={pkm.name} {...pkm} />
        ))}
      </div>
      <div className="page-switchers">
        <Button content="Previous" icon={LeftArrow} />
        <Button content="Next" icon={RightArrow} />
      </div>
    </>
  );
}
