
import { useGeneration } from "../../hooks/useGeneration";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../PokemonCard";

function Generation() {
    const { generationData } = useGeneration()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        generationData.data ? <>
            <button className="btn btn-dark" onClick={handleBack}> ← </button>

            <section>
                <h1 className="text-capitalize w-100 text-center py-5 display-4 ">{generationData.data.name} : {generationData.data.main_region.name}</h1>
                <section className="pokemons-grid">
                    {generationData.data.pokemon_species.map((pokemon, index) => <PokemonCard key={index} name={pokemon.name} />)}
                </section>
            </section>
        </> : generationData.error ? <h1>Error</h1> : <>
            <h1>Cargando ...</h1>
        </>
    );
}
export default Generation;