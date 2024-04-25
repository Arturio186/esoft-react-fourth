import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import './MainLayout.scss'

const MainLayout : FC = () => {
    return (
        <> 
            <aside>
                <p className='aside__tiltle'>Избранное</p>
                <p className='aside__tiltle'>Посмотреть позже</p>
            </aside>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout