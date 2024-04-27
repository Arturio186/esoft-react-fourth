import IFilm from "#interfaces/IFilm"

export default interface IRatingSortProps {
    setDisplayFilms: React.Dispatch<React.SetStateAction<IFilm[]>>
}