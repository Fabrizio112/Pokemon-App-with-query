import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPokemons } from "../helpers/functionFetch";


export function usePokemons(pokemon) {
    const [pokemonSearched, setPokemonSearched] = useState(false)
    const pokemonData = useQuery({
        queryKey: ["pokemon", pokemon],
        queryFn: () => getPokemons(pokemon),
        enabled: pokemonSearched
    })

    return {
        pokemonData,
        pokemonSearched,
        setPokemonSearched
    }
}
