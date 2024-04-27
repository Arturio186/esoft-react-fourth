import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import './FilmList.scss'

import { RootState } from '#store/store'

import FilmCard from '#components/FilmCard/FilmCard'
import RatingSort from '#components/RatingSort/RatingSort'

import IFilm from '#interfaces/IFilm'

const FilmList : FC = () => {
    const films = useSelector<RootState, IFilm[]>(state => state.films)
    
    const [displayFilms, setDisplayFilms] = useState<IFilm[]>(films)

    return (
        <>
            <RatingSort 
                setDisplayFilms={setDisplayFilms}
            /> 
            
            <div className="films">
                {displayFilms.map(film => <FilmCard key={film.id} film={film} />)}
            </div>
        </>
        
    )
}

export default FilmList