import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '#store/store'

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
        <div>{film.title}</div>
    )
}

export default Film