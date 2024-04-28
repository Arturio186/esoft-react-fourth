import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './Film.scss'

import { RootState } from '#store/store'

import Comments from '#components/Comments/Comments'
import FilmInfo from '#components/FilmInfo/FilmInfo'
import AddCommentForm from '#components/Forms/AddCommentForm/AddCommentForm'

import IFilm from '#interfaces/IFilm'
import RelatedFilms from '#components/RelatedFilms/RelatedFilms'

const Film : FC = () => {
    const { id } = useParams()
    const films = useSelector<RootState, IFilm[]>(state => state.films)
    const film = films.find(x => x.id === Number(id))

    if (!film) {
        return <p>Фильм не найден!</p>
    }

    return (
        <section className='content'>
            <FilmInfo film={film} />
            <RelatedFilms film={film} />
            <Comments film={film} />
            <AddCommentForm film={film} />
        </section>
    )
}

export default Film