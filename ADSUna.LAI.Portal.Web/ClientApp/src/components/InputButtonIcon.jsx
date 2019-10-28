import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Buttons.css'

export default props => {

    const buttonWithIcon = () => (
    <a onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} color='#fff' size='lg'/>
    </a>)

    const inputStyled = () => (
        <input type={props.secret ? 'password' : 'text'} 
        spellCheck={false} maxLength={props.maxLength}
        onChange={props.onChange}
        value={props.inputValue}
        placeholder={props.placeholder} style={
        {
            backgroundColor: props.placeholderColor,
            borderColor: props.inputBorderColor || '#fff0'
        }}/>
    )
    
    const classes = `inputBtnIcon ${props.buttonRight ? '': 'btnLeft'} ${props.onClick ? 'btnClickable' : ''}`
    return(
        <div className={classes}>
            { props.buttonRight ? inputStyled() : buttonWithIcon() }
            { props.buttonRight ? buttonWithIcon() : inputStyled() }
        </div>
    )
}