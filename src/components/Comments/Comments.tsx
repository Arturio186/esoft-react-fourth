import IFilm from '#interfaces/IFilm'
import { FC } from 'react'

import './Comments.scss'

interface ICommentsProps {
    film: IFilm
}

const Comments : FC<ICommentsProps> = ({ film }) => {
    return (
        <section className='comments__container'>
            <h2>Комментарии</h2>
            {film.comments.length === 0 ? 
                <p>Комментарии отсутсвуют</p>
                :
                <div className="comments">
                    {film.comments.map((comment) => <p key={comment}>{comment}</p>)}
                </div>
            }
        </section>
    )
}

export default Comments