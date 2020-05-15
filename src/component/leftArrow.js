import React from 'react'
import style from './Main.module.css'

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const leftArrow = (props) => {
    let classes = [style.Arrow, style.Left].join(' ')
    return (
        <div className={classes} onClick={props.prevHandler}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    )
}

export default leftArrow