import React from 'react'
import style from './Main.module.css'

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const rightArrow = (props) => {
    let classes = [style.Arrow, style.Right].join(' ')
    return (
        <div className={classes} onClick={props.nextHandler}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    )
}

export default rightArrow