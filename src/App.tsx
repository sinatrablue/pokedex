import "./App.css";
import Title from "./components/views/Title/Title";
import PokemonList from "./components/views/PokemonList/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonListController from "./components/controllers/PokemonList/PokemonListController";

const queryClient = new QueryClient();

function App() {
  return (
    <div id="root">
      <Title />
      <QueryClientProvider client={queryClient}>
        <PokemonListController />
      </QueryClientProvider>
    </div>
  );
}

export default App;
