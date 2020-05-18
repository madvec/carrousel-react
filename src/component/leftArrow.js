import React from 'react'
import style from './Main.module.css'

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const leftArrow = (props) => {
    let classes = [style.Arrow, style.Left].join(' ')
    return (
        <button className={classes} onClick={props.prevHandler} disabled={props.disable}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    )
}

export default leftArrow