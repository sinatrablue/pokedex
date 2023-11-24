import { useEffect, useState } from "react";
import Card from "../Card/Card";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import Loader from "../Loader/Loader";
import "./PokemonList.css";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../api/pokemonRoutes";
import Button from "../Button/Button";
import LeftArrow from "../../assets/left-direction.svg";
import RightArrow from "../../assets/right-direction.svg";

export default function PokemonList() {
  const {
    data: pokemons,
    isLoading: isListLoading,
    isError: isListError,
    error: listError,
    refetch: refetchPokemons,
  } = useQuery({
    queryKey: ["pkm"],
    queryFn: () => getPokemons(currentPageUrl),
  });

  const [currentPageUrl, setCurrentPageUrl] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    refetchPokemons();
  }, [currentPageUrl]);

  if (isListLoading) return <Loader />;

  if (isListError) return <ErrorHandler err={listError} />;

  return (
    <>
      <div className="list-container">
        {pokemons.results.map(pkm => (
          <Card key={pkm.name} {...pkm} />
        ))}
      </div>
      <div className="page-switchers">
        <Button
          content="Previous"
          icon={LeftArrow}
          onClick={() => {
            setCurrentPageUrl(pokemons.previous ?? undefined);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <Button
          content="Next"
          icon={RightArrow}
          onClick={() => {
            setCurrentPageUrl(pokemons.next ?? undefined);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </>
  );
}
