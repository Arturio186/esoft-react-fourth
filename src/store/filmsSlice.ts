import { createSlice } from "@reduxjs/toolkit";
import films from "./films";

import IFilm from "#interfaces/IFilm";
  
const initialState: IFilm[] = films

const counterSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {

    }
})

export const {
    
} = counterSlice.actions

export default counterSlice.reducer