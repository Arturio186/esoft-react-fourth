import { FC } from 'react'
import { useSelector } from 'react-redux'

import './FilmList.scss'

import { RootState } from '#store/store'

import IFilm from '#interfaces/IFilm'
import FilmCard from '#components/FilmCard/FilmCard'

const FilmList : FC = () => {
    const films = useSelector<RootState, IFilm[]>(state => state.films)

    return (
        <div className="films">
            {films.map(film => <FilmCard key={film.id} film={film} />)}
        </div>
    )
}

export default FilmList