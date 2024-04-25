import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { publicRoutes } from './routes';

const browserRouter = createBrowserRouter(publicRoutes);

const AppRouter : FC = () => {
    return (
        <RouterProvider router={browserRouter} />
    )
}

export default AppRouter;