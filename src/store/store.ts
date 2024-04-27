import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./filmsSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        films: filmsSlice,
        user: userSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch