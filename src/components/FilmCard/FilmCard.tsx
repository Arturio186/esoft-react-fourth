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
            <span className="genres">{film.categories.join(', ')}</span>
            <span className='description'>{film.description}</span>
            <span className='actors__title'>Актёры</span>
            <div className='actors'>
                {film.actors.map((actor) => 
                    <span key={actor.name} className='actor__name'>{actor.name}</span>
                )}
            </div>
        </div>
    )
}

export default FilmCard