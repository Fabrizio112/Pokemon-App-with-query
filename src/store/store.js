import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./generationSlice"
import individualPokemonReducer from "./individualPokemonSlice";
export const store = configureStore({
    reducer: {
        generation: userReducer,
        individual_pokemon: individualPokemonReducer
    }
})