import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Note {
    id?: number
    title: string
    description: string
}

const notes: Note[] = []

const noteSlice = createSlice({
    name: "notes",
    initialState: notes,
    reducers: {
       addNote: (state, action: PayloadAction<Note>) => {
        state.push(action.payload)
       },
       updateNote: (state, action: PayloadAction<Note>) => {
        const index = state.findIndex(note => note.id === action.payload.id)
        state[index] = action.payload
       }
    }
})

export const {addNote, updateNote} = noteSlice.actions
export default noteSlice.reducer
