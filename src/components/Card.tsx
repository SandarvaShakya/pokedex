import { pokemonBaseURI } from "@/constants/constants";
import { Pokemon, PokemonSpecies } from "@/interfaces/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonType from "./PokemonType";

const Card = ({name, url} : PokemonSpecies) => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    const fetchPokemon = async (pokemonUrl: string) => {
        try{
            const { data } = await axios.get(`${pokemonBaseURI}/${name}`)
            setPokemon(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemon(url)
    }, [])

    const capitalize = (pokemonName : string | undefined) => {
        if(pokemonName) return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    }

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
                    <button className="btn">Details</button>
                    <button className="btn btn--add-pokemon">Add Pokemon</button>
                </div>
            </div>
        </div>
    )
}

export default Card