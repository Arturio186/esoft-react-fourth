import { FC } from 'react'

import './RatingSortButton.scss'

import CloseButton from '#components/UI/CloseButton/CloseButton'

import IRatingSortButtonProps from '#interfaces/props/IRatingSortButtonProps'

const RatingSort : FC<IRatingSortButtonProps> = ({ ascending, setAscending }) => {
    return (
        <div className='sort'>
            <h3>Сортировка (по рейтингу)</h3>
            <div className="buttons">
                <button
                    onClick={() => setAscending(ascending === 'ASC' ? 'DESC' : 'ASC')}
                    className={`sortBtn ${ascending === 'ASC' || ascending === 'DESC' ? 'enable' : ''}`}
                >
                    {ascending === 'ASC' ? 'Сортировать ↑' : 'Сортировать ↓'}
                </button>
                {ascending && <CloseButton onClick={() => setAscending(null)}>X</CloseButton>}
            </div>
        </div>
    )
}

export default RatingSort