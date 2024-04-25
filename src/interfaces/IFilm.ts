import IActor from "./IActor"

export default interface IFilm {
    id: number
    title: string
    year: number
    description: string
    rating: number
    actors: IActor[],
    categories: string[]
}