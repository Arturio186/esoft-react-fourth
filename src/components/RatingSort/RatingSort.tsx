import { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '#store/store'

import './RatingSort.scss'

import { TAscending } from '#interfaces/TAscending'
import IFilm from '#interfaces/IFilm'
import IRatingSortProps from '#interfaces/props/IRatingSortProps'
import CloseButton from '#components/UI/CloseButton/CloseButton'

const RatingSort : FC<IRatingSortProps> = ({ setDisplayFilms }) => {
    const films = useSelector<RootState, IFilm[]>(state => state.films)
    const [ascending, setAscending] = useState<TAscending>(null)

    const sortFilmsArray = (arr : IFilm[], asc : TAscending) => {
        const sortedFilms = [...arr]

        switch (asc) {
            case 'ASC':
                sortedFilms.sort((a, b) => a.rating - b.rating)
                break
            case 'DESC':
                sortedFilms.sort((a, b) => b.rating - a.rating)
                break
        }

        return sortedFilms
    }

    useEffect(() => {
        setDisplayFilms(sortFilmsArray(films, ascending))
    }, [ascending])

    return (
        <div className='sort'>
            <h3>Сортировка (по рейтингу)</h3>
            <div className="buttons">
                <button
                    onClick={() => setAscending(ascending === 'ASC' ? 'DESC' : 'ASC')}
                    className={`sortBtn ${ascending === 'ASC' || ascending === 'DESC' ? 'enable' : ''}`}
                >
                    {ascending === 'ASC' ? 'Сортировать ↑' : 'Сортировать ↓'}
                </button>
                {ascending && <CloseButton onClick={() => setAscending(null)}>X</CloseButton>}
            </div>
        </div>
    )
}

export default RatingSort