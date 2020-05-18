import React from 'react'
import style from './Main.module.css'

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const rightArrow = (props) => {
    let classes = [style.Arrow, style.Right].join(' ')
    return (
        <button className={classes} onClick={props.nextHandler} disabled={props.disable}>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    )
}

export default rightArrow