import { NavLink } from "react-router-dom";

function BotonesAcciones() {
    return (
        <section className="w-75 d-flex justify-content-between align-items-center  ">
            <NavLink to="search-pokemons" className="btn btn-primary btn-lg boton">Search Pokemons</NavLink>
            <NavLink to="search-generations" className="btn btn-primary btn-lg boton">Search Generations</NavLink>
            <NavLink to="view-items" className="btn btn-primary btn-lg boton">View Items</NavLink>
            <NavLink to="view-locations" className="btn btn-primary btn-lg boton">View Locations</NavLink>
        </section>);
}

export default BotonesAcciones;