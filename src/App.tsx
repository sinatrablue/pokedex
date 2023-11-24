import "./App.css";
import Title from "./components/views/Title/Title";
import PokemonList from "./components/views/PokemonList/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonListController from "./components/controllers/PokemonList/PokemonListController";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Title />
      <QueryClientProvider client={queryClient}>
        <PokemonListController />
      </QueryClientProvider>
    </>
  );
}

export default App;
