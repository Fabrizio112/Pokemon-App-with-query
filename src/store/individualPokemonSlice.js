import { createSlice } from "@reduxjs/toolkit";

export const individualPokemonSlice = createSlice({
    name: 'individual_pokemon',
    initialState: "",
    reducers: {
        changePokemon: (state, action) => {
            return action.payload
        }

    }
});

export const { changePokemon } = individualPokemonSlice.actions
export default individualPokemonSlice.reducer