import { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '#store/store'

import IFilm from '#interfaces/IFilm'

const Main : FC = () => {
    const films = useSelector<RootState, IFilm[]>(state => state.films)

    return (
        <>
            {films.map(film => 
                <div key={film.id}>
                    {film.title}
                </div>
            )}
        </>
    )
}

export default Main