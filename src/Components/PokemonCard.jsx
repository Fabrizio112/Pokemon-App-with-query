import { Link } from "react-router-dom";
import { usePokemons } from "../hooks/usePokemons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePokemon } from "../store/individualPokemonSlice";

function PokemonCard({ name }) {
    const { pokemonData, pokemonSearched, setPokemonSearched } = usePokemons(name)
    const dispatch = useDispatch()
    useEffect(() => {
        setPokemonSearched(true)
        if (pokemonSearched === true) {
            setPokemonSearched(false)
        }
    }, [])
    const handleSelected = () => {
        dispatch(changePokemon(name))
    }

    return (
        pokemonData.data ?
            <div className="d-flex flex-column justify-content-center align-items-center card mx-2" >
                <span>{pokemonData.data.id && pokemonData.data.id}</span>
                <img src={pokemonData.data && pokemonData.data.sprites.front_default && pokemonData.data.sprites.front_default} alt={pokemonData.data.name} />
                <h1 className="fs-2 text-capitalize">{pokemonData.data.name}</h1>
                <Link className="btn btn-outline-secondary my-3" to={`/${pokemonData?.data.id}`} onClick={handleSelected}>View More</Link>
            </div > :
            pokemonData.isFetching && <h1>Cargando...</h1>
    );
}

export default PokemonCard;