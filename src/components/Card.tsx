import Link from "next/link";
import Image from "next/image";

import { capitalize } from "@/helpers/utils";
import { Pokemon, PokemonSpecies } from "@/interfaces/Pokemon";

import PokemonType from "./PokemonType";
import { useGetPokemons } from "@/queries/pokemonQueries";

const Card = ({ name }: PokemonSpecies) => {
	const { isLoading, data } = useGetPokemons(name);
	const pokemon: Pokemon = data?.data;

	return (
		<div className="card">
			<div className="card__img-wrapper flex flex--center">
				{isLoading ? (
					"Loading..."
				) : (
					<Image
						src={pokemon?.sprites.front_default || ""}
						alt={pokemon?.name || ""}
						fill
					/>
				)}
			</div>
			<div className="card__content">
				<div className="card__main">
					<h3 className="card__title" title={capitalize(pokemon?.name)}>
						{isLoading ? "Loading..." : capitalize(pokemon?.name)}
					</h3>
					<div className="type-group">
						{pokemon?.types.map((type, typeIndex) => {
							return <PokemonType type={type.type} key={typeIndex} />;
						})}
					</div>
				</div>
				<div className="button-group">
					<Link href={`/details/${name}`} className="btn">
						Details
					</Link>
					<a className="btn btn--add-pokemon">Add Pokemon</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
