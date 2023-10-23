import { configureStore } from "@reduxjs/toolkit"
import idReducer from "@renderer/features/idReducer"
import noteReducer from "@renderer/features/noteReducer"

export const store = configureStore({
    reducer: {
        notes: noteReducer,
        idGen: idReducer
    }
})

export type RootState = ReturnType<typeof store.getState>