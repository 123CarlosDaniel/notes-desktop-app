import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Note {
    id?: number
    title: string
    description: string
}

const notesStr = localStorage.getItem("notes")
const notes: Note[] =  notesStr ? JSON.parse(notesStr) : []

const noteSlice = createSlice({
    name: "notes",
    initialState: notes,
    reducers: {
       addNote: (state, action: PayloadAction<Note>) => {
        state.push(action.payload)
        localStorage.setItem("notes", JSON.stringify(state))
       },
       updateNote: (state, action: PayloadAction<Note>) => {
        const index = state.findIndex(note => note.id === action.payload.id)
        state[index] = action.payload
        localStorage.setItem("notes", JSON.stringify(state))
       },
       deleteNote: (state, action: PayloadAction<number>) => {
        const index = state.findIndex(note => note.id === action.payload)
        state.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(state))
       }
    }
})

export const {addNote, updateNote, deleteNote} = noteSlice.actions
export default noteSlice.reducer
