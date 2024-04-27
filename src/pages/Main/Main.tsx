import { FC } from 'react'

import FilmList from '#components/FilmList/FilmList'

const Main : FC = () => {

    return (
        <section className='content'>
            <h2>Все фильмы</h2>
            <FilmList />
        </section>
    )
}

export default Main