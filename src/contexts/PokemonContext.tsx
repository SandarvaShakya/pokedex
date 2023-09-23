import { Pokemon, PokemonContextType } from "@/interfaces/Pokemon"
import { ReactNode, createContext, useState } from "react"

export const PokemonContext = createContext<PokemonContextType>({
    pokemons: [],
    setPokemons: () => {},
})

const PokemonProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons }}>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider