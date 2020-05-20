import React from 'react'
import styles from './Main.module.css'
// get fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'


const dots = (props) => {
    let icon = <FontAwesomeIcon icon={faCircle} />
    if(props.activeSlide === props.index) 
        icon = <FontAwesomeIcon icon={faDotCircle} />

    return (
        <li onClick={props.clicked} className={styles.Dots} >
            {icon}
        </li>
    )
}

export default dots