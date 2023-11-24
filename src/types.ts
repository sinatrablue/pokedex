export type ButtonProps = {
  content: string;
  icon: string;
  onClick: () => void;
};

export type CardProps = {
  content: string;
};

export type ErrorHandlerProps = {
  err: any;
};

export type PokemonGroupProps = {
  count: number;
  next: string | null; // url
  previous: string | null; // url
  results: { name: string; url: string }[];
};

export type PokemonProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { [spriteName: string]: string };
};

export type PokemonBasicProps = Pick<PokemonProps, "id" | "name" | "sprites">;
