import Card from "@/components/Card";
import GenerationButtons from "@/components/GenerationButtons";
import { PokemonContext } from "@/contexts/PokemonContext";
import { PokemonSpecies } from "@/interfaces/Pokemon";
import { useGetGenerations } from "@/queries/pokemonQueries";
import { useContext } from "react";

const Home = () => {
	const { activeGeneration } = useContext(PokemonContext);
	const { data } = useGetGenerations(activeGeneration);
	const pokemons: PokemonSpecies[] = data?.data.pokemon_species;

	return (
		<div>
			<div className="container">
				<h1>Pokedex</h1>
			</div>
			<GenerationButtons />
			<div className="container">
				<div className="card-group">
					{pokemons &&
						pokemons.map(({ name, url }: PokemonSpecies) => (
							<Card name={name} url={url} key={name} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
