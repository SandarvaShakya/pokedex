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
    name: string
    sprites: {
        front_default: string
        front_shiny: string
    }
    moves: []
    types: Type[]
}

export interface Type {
    type: {
        name: string
        url: string
    }
}