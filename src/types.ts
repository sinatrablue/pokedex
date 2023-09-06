export type CardProps = {
  content: string;
};

export type ErrorHandlerProps = {
  err: any;
};

export type rootUrlReturn = {
  name: string;
  url: string;
};

export type PokemonProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { [spriteName: string]: string };
};

export type PokemonBasicProps = Pick<PokemonProps, "id" | "name" | "sprites">;
