import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { capitalize } from "@/helpers/utils";
import { Ability, Pokemon } from "@/interfaces/Pokemon";
import { useGetPokemons } from "@/queries/pokemonQueries";

const Pokemon = () => {
	const pokemonName = useRouter().query.name;
	const { isLoading, data } = useGetPokemons(pokemonName as string);
	const pokemon: Pokemon = data?.data;
	const pokemonImage = pokemon?.sprites.other.dream_world.front_default
		? pokemon?.sprites.other.dream_world.front_default
		: pokemon?.sprites.other["official-artwork"].front_default;

	return (
		<div className="detail">
			<div className="container">
				<h1>{isLoading ? "Loading..." : capitalize(pokemon?.name)}</h1>
				<div className="detail-content">
					<div className="detail__img-wrapper flex flex--center">
						<Image src={pokemonImage || ""} alt={pokemon?.name || ""} fill />
					</div>
				</div>
				<Link href="/" className="back-btn">
					Back
				</Link>
			</div>
		</div>
	);
};

export default Pokemon;
