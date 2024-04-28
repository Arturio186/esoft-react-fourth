import { createSlice } from "@reduxjs/toolkit";

import IUserState from "#interfaces/IUserState";

const initialState : IUserState = {
    favoriteFilms: [],
    toWatchFilms: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favoriteFilms.push(action.payload)
        },

        removeFromFavorite: (state, action) => {
            state.favoriteFilms = state.favoriteFilms.filter((film) => film.id != action.payload.id)
        },
        
        addToWatch: (state, action) => {
            state.toWatchFilms.push(action.payload)
        },

        removeFromWatch: (state, action) => {
            state.toWatchFilms = state.toWatchFilms.filter((film) => film.id != action.payload.id)
        },
    }
})

export const {
    addToFavorite,
    removeFromFavorite,
    addToWatch,
    removeFromWatch
} = userSlice.actions

export default userSlice.reducer