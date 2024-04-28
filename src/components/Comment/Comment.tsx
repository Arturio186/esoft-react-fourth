import { FC } from 'react'

import classes from './Comment.module.scss'

import ICommentProps from '#interfaces/props/ICommentProps'


const Comment : FC<ICommentProps> = ({ children }) => {
  return (
    <div className={classes.comment}>
        <p className={classes.author}>Анонимный пользователь</p>
        <p className={classes.message}>{children}</p>
    </div>
  )
}

export default Comment