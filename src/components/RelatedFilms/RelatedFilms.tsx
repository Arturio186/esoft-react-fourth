import { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './RelatedFilms.scss'

import { RootState } from '#store/store'

import IRelatedFilmsProps from '#interfaces/props/IRelatedFilmsProps';
import IFilm from '#interfaces/IFilm';

const RelatedFilms : FC<IRelatedFilmsProps> = ({ film }) => {
    const films = useSelector<RootState, IFilm[]>(state => state.films)

    const relatedMovies = films.filter((_film) => {
        if (_film.id == film.id)
            return false

        let hits = 0;

        for (const category of _film.categories) {
            if (film?.categories.indexOf(category) !== -1) {
                hits += 1
            }
        }

        if (hits >= 2 || (hits === 1 && film?.categories.length === 1))
            return true
        
        return false
    })

    return (
        <section className='related__films'>
            <h2>Похожие фильмы</h2>
            {relatedMovies.length !== 0 ? 
                <div className="film_links">
                    {relatedMovies.map((film) => 
                        <NavLink key={film.id} to={`/films/${film.id}`} className='film__link'>
                            {film.title}
                        </NavLink>
                    )}
                </div>
                :
                <p className='message'>Похожие фильмы не найдены!</p>
            }
           
        </section>
    )
}

export default RelatedFilms