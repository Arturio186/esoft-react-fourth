import MainLayout from "#layouts/MainLayout/MainLayout"

import Film from "#pages/Film/Film"
import Main from "#pages/Main/Main"
import NotFound from "#pages/NotFound/NotFound"
import Search from "#pages/Search/Search"

import { MAIN_ROUTE, SEARCH_ROUTE, FILM_ROUTE } from "#utils/consts"

import IRoute from "#interfaces/IRoute"

export const publicRoutes : Array<IRoute> = [
    { path: '/', element: <MainLayout />, title: "Шаблон", children: [
        { path: MAIN_ROUTE, element: <Main />, title: "Главная" },
        { path: SEARCH_ROUTE, element: <Search />, title: "Поиск" },
        { path: FILM_ROUTE, element: <Film />, title: "Фильм" },
        { path: '*', element: <NotFound />, title: "Не найдено" }
    ]},
]