import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'

import './AddCommentForm.scss'

import { addComment } from '#store/filmsSlice'

import IAddCommentFormProps from '#interfaces/props/IAddCommentForm'

interface IAddCommentFields {
    comment: string
}

const AddCommentForm : FC<IAddCommentFormProps> = ({ film }) => {
    const dispatch = useDispatch()
    const {register, handleSubmit, reset, formState: { errors }} = useForm<IAddCommentFields>({mode: "onChange"});

    const onSubmit: SubmitHandler<IAddCommentFields> = (data) => {
        dispatch(addComment({filmID: film.id, comment: data.comment }))
        reset()
    }
    
    return (
        <form className='comment__form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Напишите свой комментарий</h2>

            <textarea 
                placeholder='Комментарий'
                {...register('comment', {
                    required: 'Введите комментарий!',
                })}
            ></textarea>
            {errors.comment && <p className='form__error'>{errors.comment.message}</p>}

            <button>Отправить!</button>
        </form>
    )
}

export default AddCommentForm