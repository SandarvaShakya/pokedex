import Card from "@/components/Card"
import GenerationButtons from "@/components/GenerationButtons"
import { PokemonContext } from "@/contexts/PokemonContext"
import { PokemonSpecies } from "@/interfaces/Pokemon"
import { useContext } from "react"

const Home = () => {
  const { pokemons } = useContext(PokemonContext)

  return (
    <div>
      <div className="container">
        <h1>Pokedex</h1>
      </div>
      <GenerationButtons/>
      <div className="container">
        <div className="card-group">
            {pokemons.map(({name, url} : PokemonSpecies) => <Card name={name} url={url} key={name}/>)}
        </div>
      </div>
    </div>
  )
}

export default Home