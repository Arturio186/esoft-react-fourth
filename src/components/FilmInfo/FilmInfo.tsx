import { FC } from 'react'

import './FilmInfo.scss'

import FilmActions from '#components/FilmActions/FilmActions'

import IFilmInfoProps from '#interfaces/props/IFilmInfo'

const FilmInfo : FC<IFilmInfoProps>= ({ film }) => {
    return (
        <div className="film__info">
            <h2>{film.title}</h2>
            
            <p className='year'>{film.year}</p>
            <p className="genres">{film.categories.join(', ')}</p>
            <p className='rating'>Рейтинг: {film.rating}</p>
            <p className='description'>{film.description}</p>

            <h3 className='actors__title'>Актёры</h3>

            <div className='actors'>
                {film.actors.map((actor) => 
                    <div key={actor.name} className="actor">
                        <p>{actor.name}</p>
                        <p>Дата рождения: {actor.birthday}</p>
                    </div>
                )}
            </div>
            <FilmActions film={film} />
        </div>
    )
}

export default FilmInfo