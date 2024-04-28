import { createSlice } from "@reduxjs/toolkit";
import films from "./films";

import IFilm from "#interfaces/IFilm";
  
const initialState: IFilm[] = films

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addComment: (state, action : { payload: { filmID : number, comment: string } }) => {
            for (const film of state) {
                if (film.id === action.payload.filmID) {
                    film.comments.push(action.payload.comment)
                }
            }
        },
    }
})

export const {
    addComment
} = filmsSlice.actions

export default filmsSlice.reducer