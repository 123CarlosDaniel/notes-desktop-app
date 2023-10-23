import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
    name: "id",
    initialState: {id: 0},
    reducers: {
        increment: (state) => {
            state.id += 1
        }
    }
})


export const {increment} = idSlice.actions
export default idSlice.reducer
