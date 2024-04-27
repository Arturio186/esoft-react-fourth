import { createSlice } from "@reduxjs/toolkit";
import films from "./films";

import IFilm from "#interfaces/IFilm";
  
const initialState: IFilm[] = films

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {

    }
})

export const {
    
} = filmsSlice.actions

export default filmsSlice.reducer