import { PokemonGroupProps } from "../types";

export const getPokemons = async (pokeUrl?: string) => {
  // Get all the pokemons, 20 by 20
  const response = await fetch(pokeUrl ?? "https://pokeapi.co/api/v2/pokemon/");
  if (!response.ok) throw new Error("Couldn't fetch Pokemons list");
  return response.json() as Promise<PokemonGroupProps>;
};

export const getPokemonByURL = async (pkm_name: string, pkm_url: string) => {
  const response = await fetch(pkm_url);
  if (!response.ok) throw new Error(`Couldn't fetch Pokemon: ${pkm_name}`);
  return response.json();
};
