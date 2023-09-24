import { Pokemon, PokemonContextType, PokemonSpecies } from "@/interfaces/Pokemon"
import { ReactNode, createContext, useState } from "react"

export const PokemonContext = createContext<PokemonContextType>({
    pokemons: [],
    setPokemons: () => {},
    activeGeneration: 1,
    setActiveGeneration: () => {}
})

const PokemonProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<PokemonSpecies[]>([])
    const [activeGeneration, setActiveGeneration] = useState(1)

    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons, activeGeneration, setActiveGeneration }}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider