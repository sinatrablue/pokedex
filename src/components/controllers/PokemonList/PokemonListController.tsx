import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemonByURL, getPokemons } from "../../../api/pokemonRoutes";
import PokemonList from "../../views/PokemonList/PokemonList";
import ErrorHandler from "../../views/ErrorHandler/ErrorHandler";
import { useEffect, useState } from "react";
import PageSwitchers from "../../views/PageSwitchers/PageSwitchers";

export default function PokemonListController() {
  const queryContext = useQueryClient();

  const [currentPageUrl, setCurrentPageUrl] = useState<string>("");

  useEffect(() => {
    console.log("page url", currentPageUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPageUrl]);

  const {
    data: pokemonPageInfos,
    isLoading: isListLoading,
    isError: isListError,
    error: listError,
  } = useQuery({
    queryKey: ["pkm", currentPageUrl],
    queryFn: ({ queryKey }) => getPokemons(queryKey[1]),
  });

  useEffect(() => {
    console.log("page infos", pokemonPageInfos);
  }, [pokemonPageInfos]);

  if (isListError) return <ErrorHandler err={listError} />;

  const pokemons = useQueries({
    queries: pokemonPageInfos?.results
      ? pokemonPageInfos.results.map(({ name, url }) => {
          return {
            queryKey: ["pkm", name],
            queryFn: () => getPokemonByURL(name, url),
          };
        })
      : [],
  });

  useEffect(() => {
    console.log("pokemons", pokemons);
  }, [pokemons]);

  return (
    <>
      <PokemonList data={pokemons} isListLoading={isListLoading} />

      {pokemonPageInfos && (
        <PageSwitchers
          previous={pokemonPageInfos.previous}
          next={pokemonPageInfos.next}
          setCurrentPageUrl={url => setCurrentPageUrl(url)}
        />
      )}
    </>
  );
}
