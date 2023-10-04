import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import { pokemonBaseURI } from "@/constants/constants";
import { capitalize } from "@/helpers/utils";
import { Pokemon } from "@/interfaces/Pokemon";

const Pokemon = () => {
	const [pokemon, setPokemon] = useState<Pokemon>();
	const pokemonName = useRouter().query.name;

	const fetchPokemon = async () => {
		try {
			if (pokemonName) {
				const { data } = await axios.get(`${pokemonBaseURI}/${pokemonName}`);
				setPokemon(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPokemon();
	}, [pokemonName]);

	return (
		<div className="container">
			<h1>{capitalize(pokemon?.name)}</h1>
			<Link href="/">Back</Link>
		</div>
	);
};

export default Pokemon;
