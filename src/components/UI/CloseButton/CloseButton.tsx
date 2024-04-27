import { FC } from 'react'

import classes from './CloseButton.module.scss'

import IButtonProps from '#interfaces/props/IButtonProps'

const CloseButton : FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <button {...rest} className={classes.closeBtn}>
            {children}
        </button>
    )
}

export default CloseButton