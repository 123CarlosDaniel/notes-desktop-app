import { configureStore } from "@reduxjs/toolkit"
import noteReducer from "@renderer/features/noteReducer"

export const store = configureStore({
    reducer: {
        notes: noteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>