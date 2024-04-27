import { FC } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import './MainLayout.scss'
import { MAIN_ROUTE, SEARCH_ROUTE } from '#utils/consts'

const MainLayout : FC = () => {
    return (
        <> 
            <aside>
                <p className='aside__tiltle'>Избранное</p>
                <p className='aside__tiltle'>Посмотреть позже</p>
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