import { createSlice } from "@reduxjs/toolkit";

export const generationSlice = createSlice({
    name: 'generation',
    initialState: "",
    reducers: {
        changeGeneration: (state, action) => {
            return action.payload
        },

    }
});

export const { changeGeneration } = generationSlice.actions
export default generationSlice.reducer