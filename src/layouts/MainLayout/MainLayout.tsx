import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, NavLink } from 'react-router-dom'

import './MainLayout.scss'

import { RootState } from '#store/store'

import { MAIN_ROUTE, SEARCH_ROUTE } from '#utils/consts'

import IUserState from '#interfaces/IUserState'

const MainLayout : FC = () => {
    const user = useSelector<RootState, IUserState>(state => state.user)
    
    return (
        <> 
            <aside>
                <h2 className='aside__title'>Избранное</h2>
                <ul>
                    {user.favoriteFilms.map((film) => 
                        <li key={film.id}>{film.title}</li>
                    )}
                </ul>
                <h2 className='aside__title'>Посмотреть позже</h2>
                <ul>
                    {user.toWatchFilms.map((film) => 
                        <li key={film.id}>{film.title}</li>
                    )}
                </ul>
            </aside>
            <div className="container">
                <header>
                    <NavLink className='link' to={MAIN_ROUTE}>Главная</NavLink>
                    <NavLink className='link' to={SEARCH_ROUTE}>Поиск</NavLink>
                </header>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout