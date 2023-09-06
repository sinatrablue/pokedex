import "./App.css";
import Title from "./components/Title/Title";
import PokemonList from "./components/PokemonList/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Title />
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    </>
  );
}

export default App;
