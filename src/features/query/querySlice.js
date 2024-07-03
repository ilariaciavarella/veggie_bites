import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        updateQuery: (state, newQuery) => {
            state.value = newQuery;
        }
    }
})

export const { updateQuery } = querySlice.actions;
export default querySlice.reducer;