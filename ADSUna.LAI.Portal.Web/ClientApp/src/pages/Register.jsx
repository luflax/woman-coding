import React, { Component } from 'react';
import {faUserAlt, faKey, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import './Register.css'
import InputButtonIcon from '../components/InputButtonIcon'
import ButtonIcon from '../components/ButtonIcon';

export default props => {

  return(
    <div className="containerRegister">
        <h2>Cadastro da profissional</h2>
        <InputButtonIcon placeholder='Usuaria' 
          icon={faUserAlt} placeholderColor='#fff' 
          inputBorderColor='#d4d4d4' 
          maxLength={20}/>

        <InputButtonIcon placeholder='Email' 
          icon={faEnvelope} placeholderColor='#fff' 
          inputBorderColor='#d4d4d4'
          maxLength={50}/>

        <InputButtonIcon placeholder='Confirmar email' 
          icon={faEnvelope} placeholderColor='#fff' 
          inputBorderColor='#d4d4d4'
          maxLength={50}/>

        <InputButtonIcon placeholder='Senha' 
          icon={faKey} placeholderColor='#fff' 
          inputBorderColor='#d4d4d4' 
          maxLength={30}/>

        <ButtonIcon label='Cadastrar'/>
    </div>
  )
}