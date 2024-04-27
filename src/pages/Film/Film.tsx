import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './Film.scss'

import { RootState } from '#store/store'

import FilmActions from '#components/FilmActions/FilmActions'
import Comments from '#components/Comments/Comments'

import IFilm from '#interfaces/IFilm'

const Film : FC = () => {
    const { id } = useParams()
    const films = useSelector<RootState, IFilm[]>(state => state.films)
    const film = films.find(x => x.id === Number(id))

    console.log(film)

    if (!film) {
        return <p>Фильм не найден!</p>
    }

    return (
        <section className='content'>
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
            
            <Comments film={film} />
           
        </section>
    )
}

export default Film