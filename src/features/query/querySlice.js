import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: localStorage.getItem('storedQuery') || ''
}

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        updateQuery: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateQuery } = querySlice.actions;

export default querySlice.reducer;