export const capitalize = (pokemonName: string | undefined) => {
    if (pokemonName) return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
}