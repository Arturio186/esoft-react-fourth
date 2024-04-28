import { RootState } from '#store/store'
import React, { FC, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import Select, { MultiValue } from 'react-select'

import './Search.scss'

import FilmCard from '#components/FilmCard/FilmCard'

import filterOptions from '#utils/filterOptions'

import IFilm from '#interfaces/IFilm'

const Search : FC = () => {
    const [search, setSearch] = useState<string>('')
    const [genres, setGenres] = useState<MultiValue<{value: string, label: string}>>()
    const films = useSelector<RootState, IFilm[]>(state => state.films)

    const searchedAndFilteredFilms = useMemo(() => {
        return films.filter((film) => {
            if (!film.title.toLowerCase().includes(search.toLowerCase()))
                return false
            
            let isGood = true

            genres?.forEach((genre) => {
                if (!film.categories.includes(genre.value)) {
                    isGood = false
                }
            })
            
            return isGood
        })
    }, [search, genres])

    return (
        <section className='content'>
            <h2>Поиск фильмов</h2>
            <form className='search__form'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type='text' 
                    placeholder='Название' 
                />
                <Select
                    placeholder='Жанры'
                    isMulti 
                    options={filterOptions} 
                    className="react__select"
                    onChange={(choice) => setGenres(choice)}
                />
            </form>
            <div className="films">
                {searchedAndFilteredFilms.map(film => <FilmCard key={film.id} film={film} />)}
            </div>
        </section>
    )
}

export default Search