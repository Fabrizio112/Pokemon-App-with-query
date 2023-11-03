import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changePokemon } from "../../store/individualPokemonSlice";
function PokemonCard({ data }) {
    const dispatch = useDispatch()

    const handleSelected = () => {
        dispatch(changePokemon(data.name))
    }
    return (<div className="card" style={{ width: "18rem" }}>
        <img src={data.sprites.front_default} className="card-img-top" alt="..." />
        <div className="card-body">
            <h2 className="w-100 text-center text-capitalize">{data.name}</h2>
        </div>
        <NavLink className="btn btn-primary btn-lg" to={`/${data.id}`} onClick={handleSelected}>View More</NavLink>
    </div>);
}

export default PokemonCard;