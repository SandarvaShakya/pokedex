import { generationBaseURI, pokemonBaseURI } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPokemons = (name: string) => {
    return useQuery(['pokemon', name], async () => {
        return await axios.get(`${pokemonBaseURI}/${name}`)
    })
}

export const useGetGenerations = (id: number) => {
    return useQuery(['pokemon_species', id], async () => {
        return await axios.get(`${generationBaseURI}/${id}`)
    })
}

export const useGetAbility = (name: string, url: string) => {
    const { isLoading, data } = useQuery(['ability', name], async () => {
        return await axios.get(url)
    })
    const ability = data?.data
    const isAbilityLoading = isLoading
    return { isAbilityLoading, ability }
}