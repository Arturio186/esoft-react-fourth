import { FC } from 'react'

import FilmList from '#components/FilmList/FilmList'

const Main : FC = () => {

    return (
        <>
            <h2>Все фильмы</h2>
            <FilmList />
        </>
    )
}

export default Main