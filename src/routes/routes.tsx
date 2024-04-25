import IRoute from "#interfaces/IRoute"

import MainLayout from "#layouts/MainLayout/MainLayout"

import Film from "#pages/Film/Film"
import Main from "#pages/Main/Main"
import NotFound from "#pages/NotFound/NotFound"
import Search from "#pages/Search/Search"

export const publicRoutes : Array<IRoute> = [
    { path: '/', element: <MainLayout />, title: "Шаблон", children: [
        { path: '/', element: <Main />, title: "Главная" },
        { path: '/search', element: <Search />, title: "Поиск" },
        { path: '/films/:id', element: <Film />, title: "Фильм" },
        { path: '*', element: <NotFound />, title: "Не найдено" }
    ]},
]