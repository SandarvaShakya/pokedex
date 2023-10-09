import { Dispatch } from "react"

export interface PokemonSpecies {
    name: string
    url: string
}

export type PokemonContextType = {
    pokemons: PokemonSpecies[]
    setPokemons: Dispatch<React.SetStateAction<PokemonSpecies[]>>
    activeGeneration: number
    setActiveGeneration: Dispatch<React.SetStateAction<number>>
}

export interface Pokemon {
    name: string,
    abilities: {
        ability: Ability
    }[]
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
            home: {
                front_default: string
            }
            "official-artwork": {
                front_default: string
            }
        }
    }
    moves: {
        move: Move
        version_group_details: VersionGroupDetail[]
    }[]
    types: Type[]
}

export interface Move {
    name: string
    url: string
}

export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: {
        name: string
    }
}

export interface Ability {
    name: string
    url: string
}

export interface Type {
    type: {
        name: string
        url: string
    }
}