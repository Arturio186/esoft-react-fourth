import { FC, useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import Select, { MultiValue } from 'react-select'

import './FilmList.scss'

import { RootState } from '#store/store'

import FilmCard from '#components/FilmCard/FilmCard'
import RatingSortButton from '#components/RatingSortButton/RatingSortButton'

import filterOptions from '#utils/filterOptions'

import IFilm from '#interfaces/IFilm'
import { TAscending } from '#interfaces/TAscending'


const FilmList : FC = () => {
    const films = useSelector<RootState, IFilm[]>(state => state.films)

    const [ascending, setAscending] = useState<TAscending>(null)
    const [genres, setGenres] = useState<MultiValue<{value: string, label: string}>>()

    const sortedAndFilteredFilms = useMemo(() => {
        const result = films.filter((film) => {
            let isGood = true
            
            genres?.forEach((genre) => {
                if (!film.categories.includes(genre.value)) {
                    isGood = false
                    console.log(`${film.title} не имеет ${genre.value}`)
                }
            })
            
            return isGood
        })

        switch (ascending) {
            case 'ASC':
                result.sort((a, b) => a.rating - b.rating)
                break
            case 'DESC':
                result.sort((a, b) => b.rating - a.rating)
                break
        }

        return result
    }, [genres, ascending])
    

    return (
        <>
            <RatingSortButton
                ascending={ascending}
                setAscending={setAscending}
            /> 

            <Select
                placeholder='Жанры'
                isMulti 
                options={filterOptions} 
                className="react__select"
                onChange={(choice) => setGenres(choice)}
            />
            
            <div className="films">
                {sortedAndFilteredFilms.map(film => <FilmCard key={film.id} film={film} />)}
            </div>
        </>
        
    )
}

export default FilmList