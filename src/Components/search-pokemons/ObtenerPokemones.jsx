import { useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";


function ObtenerPokemones() {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({ pokemon: "" })

    const { pokemonData, pokemonSearched, setPokemonSearched } = usePokemons(pokemon)

    const handleChange = (e) => {
        setPokemon(e.target.value)
    }
    const handleClick = () => {
        pokemonData.refetch()

    }
    const handleBack = () => {
        navigate("/")
    }

    return (<>
        <button className="btn btn-dark" onClick={handleBack}> ← </button>
        <section className="w-100 h-100 d-flex flex-column justify-content-center align-items-center mt-5 ">
            <h1 className="p-3">Enter What Pokemon Do you want to know about?:</h1>
            <input name="pokemon" type="text" className="form-control form-control-lg w-50 text-center fs-3" value={pokemon.pokemon} onChange={handleChange} />
            <button onClick={handleClick} className="btn btn-primary btn-lg my-5 px-5">Search Pokemon</button>
        </section>
        <section className="w-100 d-flex justify-content-center align-center-center my-5">
            {pokemonData.isFetching && <h2>Loading ...</h2>}
            {pokemonData.isError && <h2>Pokemon does not exists </h2>}
            {pokemonData.data && <PokemonCard data={pokemonData.data} />}
        </section>

    </>);
}

export default ObtenerPokemones;