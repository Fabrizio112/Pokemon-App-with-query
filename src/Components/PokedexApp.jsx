import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ObtenerPokemones from "./search-pokemons/ObtenerPokemones";
import ObtenerGeneraciones from "./search-generations/ObtenerGeneraciones";
import Generation from "./search-generations/Generation";
import Items from "./view-items/Items";
import IndividualPokemon from "../Pages/IndividualPokemon";
import ViewLocation from "../Pages/Location";

function PokedexApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/search-pokemons" element={<ObtenerPokemones />} />
                <Route path="/search-generations" element={<ObtenerGeneraciones />} />
                <Route path="/search-generations/:nombre" element={<Generation />} />
                <Route path="/:id" element={<IndividualPokemon />} />
                <Route path="/view-items" element={<Items />} />
                <Route path="/view-locations" element={<ViewLocation />} />
                <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
            </Routes>
        </HashRouter>);
}

export default PokedexApp;