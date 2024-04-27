import IButtonProps from '#interfaces/props/IButtonProps'
import { FC } from 'react'

import classes from './CloseButton.module.scss'

const CloseButton : FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <button {...rest} className={classes.closeBtn}>
            {children}
        </button>
    )
}

export default CloseButton