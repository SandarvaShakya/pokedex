import { useEffect, useState } from "react";
import axios from "axios";

import { pokemonBaseURI } from "@/constants/constants";
import { Pokemon, PokemonSpecies } from "@/interfaces/Pokemon";
import PokemonType from "./PokemonType";
import Link from "next/link";
import { capitalize } from "@/helpers/utils";

const Card = ({ name } : PokemonSpecies) => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    const fetchPokemon = async () => {
        try{
            const { data } = await axios.get(`${pokemonBaseURI}/${name}`)
            setPokemon(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <div className="card">
            <div className="card__img-wrapper flex flex--center">
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            </div>
            <div className="card__content">
                <div className="card__main">
                    <h3 className="card__title" title={capitalize(pokemon?.name)}>
                        {capitalize(pokemon?.name)}
                    </h3>
                    <div className="type-group">
                        {pokemon?.types.map((type, typeIndex) => {
                            return <PokemonType type={type.type} key={typeIndex}/>
                        })}
                    </div>
                </div>
                <div className="button-group">
                    <Link href={`/details/${name}`} className="btn">Details</Link>
                    <a className="btn btn--add-pokemon">Add Pokemon</a>
                </div>
            </div>
        </div>
    )
}

export default Card