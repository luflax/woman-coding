import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Buttons.css'

export default props => {

    const preventRedirect = e => {
        e.preventDefault()
        props.onClick(e)
    }

    const classes = `btnIcon`
    return(
        <a href="#" onClick={preventRedirect} className={classes}>
            {
                props.icon ? <FontAwesomeIcon icon={props.icon} color='#fff' size='lg'/> : ''
            }
            <span>{props.label}</span>
        </a>
    )
}