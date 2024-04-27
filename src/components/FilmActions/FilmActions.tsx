import { FC } from 'react'

import './FilmActions.scss'
import IFilm from '#interfaces/IFilm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '#store/store'

import IUserState from '#interfaces/IUserState'

import { addToFavorite, removeFromFavorite, addToWatch, removeFromWatch} from '#store/userSlice'

interface IFilmActionsProps {
    film: IFilm
}

const FilmActions : FC<IFilmActionsProps> = ({ film }) => {
    const user = useSelector<RootState, IUserState>(state => state.user)
    const dispatch = useDispatch()

    // films.find(x => x.id === Number(id))
    const isFavourite = user.favoriteFilms.find(x => x.id === film.id)
    const isWatch = user.toWatchFilms.find(x => x.id === film.id)

    return (
        <div className="actions">
            <svg
                className={isFavourite ? 'active__favourite' : ''}
                onClick={() => isFavourite ? dispatch(removeFromFavorite(film)) : dispatch(addToFavorite(film))} 
                viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
            <svg
                className={isWatch ? 'active__time' : ''}
                onClick={() => isWatch ? dispatch(removeFromWatch(film)) : dispatch(addToWatch(film))} 
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 6V12" stroke="#fff" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16.24 16.24L12 12" stroke="#fff" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
        </div>
    )
}

export default FilmActions