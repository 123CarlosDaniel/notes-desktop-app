import { createSlice } from "@reduxjs/toolkit";

const idStr = localStorage.getItem("id")
const initialState = idStr ? JSON.parse(idStr) : {id : 0}

const idSlice = createSlice({
    name: "id",
    initialState,
    reducers: {
        increment: (state) => {
            state.id += 1
            localStorage.setItem("id", JSON.stringify(state))
        }
    }
})


export const {increment} = idSlice.actions
export default idSlice.reducer
