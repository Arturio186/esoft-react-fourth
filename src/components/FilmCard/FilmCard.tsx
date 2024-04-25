import IFilm from '#interfaces/IFilm'
import { FC } from 'react'
import FilmSVG from '../../assets/film.svg'

import './FilmCard.scss'

interface IFilmProps {
    film: IFilm
}

const FilmCard : FC<IFilmProps> = ({ film }) => {
    return (
        <div className='film'>
            <img src={FilmSVG} alt='Film image' />
            <span className='title'>{film.title}</span>
            <span className='year'>{film.year}</span>
            <div className='actors'>
                {film.actors.map((actor) => 
                    <div className='actor' key={actor.name}>
                        <span className='name'>{actor.name}</span>
                        <span className='birth'>{actor.birthday}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilmCard