import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { capitalize } from "@/helpers/utils";
import { Pokemon } from "@/interfaces/Pokemon";
import { useGetPokemons } from "@/queries/pokemonQueries";

const Pokemon = () => {
	const pokemonName = useRouter().query.name;
	const { isLoading, data } = useGetPokemons(pokemonName as string);
	const pokemon: Pokemon = data?.data;

	return (
		<div className="container">
			<h1>{isLoading ? "Loading..." : capitalize(pokemon?.name)}</h1>
			<div className="card__img-wrapper flex flex--center">
				<Image
					src={pokemon?.sprites.front_default || ""}
					alt={pokemon?.name || ""}
					fill
				/>
			</div>
			<Link href="/">Back</Link>
		</div>
	);
};

export default Pokemon;
