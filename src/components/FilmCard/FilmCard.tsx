import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import FilmSVG from '../../assets/film.svg'
import './FilmCard.scss'

import FilmActions from '#components/FilmActions/FilmActions'

import IFilmCardProps from '#interfaces/props/IFilmCardProps'

const FilmCard : FC<IFilmCardProps> = ({ film }) => {
    const navigate = useNavigate()

    const openFilmPage = () => {
        navigate(`./films/${film.id}`)
    }

    return (
        <div className='film'>
            <FilmActions film={film} />
            <img src={FilmSVG} alt='Film image' />
            <p onClick={openFilmPage} className='title'>{film.title}</p>
            <p className='year'>{film.year}</p>
            <p className="genres">{film.categories.join(', ')}</p>
            <p className='rating'>Рейтинг: {film.rating}</p>
            <p className='description'>{film.description}</p>
            <p className='actors__title'>Актёры</p>
            <div className='actors'>
                {film.actors.map((actor) => 
                    <p key={actor.name} className='actor__name'>{actor.name}</p>
                )}
            </div>
        </div>
    )
}

export default FilmCard