import IFilm from "./IFilm"

export default interface IUserState {
    favoriteFilms: IFilm[],
    toWatchFilms: IFilm[]
}