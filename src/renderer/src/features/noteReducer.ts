import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Note {
    id?: number
    title: string
    description: string
}

const notes: Note[] = [
    {
        id: 1,
        title: "hola mundo",
        description: "este es un ejemplo"
    }
]

const noteSlice = createSlice({
    name: "notes",
    initialState: notes,
    reducers: {
       addNote: (state, action: PayloadAction<Note>) => {
        state.push(action.payload)
       } 
    }
})

export const {addNote} = noteSlice.actions
export default noteSlice.reducer
