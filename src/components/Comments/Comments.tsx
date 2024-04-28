import { FC } from 'react'

import './Comments.scss'

import Comment from '#components/Comment/Comment'

import ICommentsProps from '#interfaces/props/ICommentsProps'

const Comments : FC<ICommentsProps> = ({ film }) => {
    return (
        <section className='comments__container'>
            <h2>Комментарии</h2>
            {film.comments.length === 0 ? 
                <p>Комментарии отсутсвуют</p>
                :
                <div className="comments">
                    {film.comments.map((comment) => <Comment key={comment}>{comment}</Comment>)}
                </div>
            }
        </section>
    )
}

export default Comments