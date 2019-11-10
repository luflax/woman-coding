import React, { Component, useState } from 'react';
import {connect} from 'react-redux'
import {faUserAlt, faKey, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Login.css'
import InputButtonIcon from '../components/InputButtonIcon'
import ButtonIcon from '../components/ButtonIcon';
import { Container } from 'react-bootstrap';

const Login = props => {
  const[wrongCredentials, setWrongCredentials] = useState(false)
  const[tryingLogin, setTryingLogin] = useState(false)
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const tryLogin = async () => {
      setTryingLogin(true)

      await new Promise(resolve => setTimeout(resolve, 1000))
      //esta é a api do login, como fazer a chamada? passar um json: { "Login": "gercy@outlook.com.br", "Password": "123456" }
      fetch('api/Auth/Login',
          {
              method: "POST",
              body: FormData
          })

    setWrongCredentials(true)

    setTryingLogin(false)
  }

  return(
    <div className="containerLogin">
        <h2>Área da profissional{props.token}</h2>
        <InputButtonIcon placeholder='Usuaria' 
          icon={faUserAlt} placeholderColor='#fff' 
          inputBorderColor='#d4d4d4' maxLength={50}
          onChange={e => setUsername(e.target.value)}
          inputValue={username}/>

        <InputButtonIcon placeholder='Senha' 
          icon={faKey} placeholderColor='#fff' 
          inputBorderColor='#d4d4d4' secret maxLength={30}
          onChange={e => setPassword(e.target.value)}
          inputValue={password}/>
        
        {wrongCredentials ? <h6>Combinação de credenciais incorreta.</h6> : ''}
        {tryingLogin ? 
        <div className="overlayLoading">
          <FontAwesomeIcon icon={faCircleNotch} className='iconLoading' spin size='3x'/>
        </div> : ''}

        <ButtonIcon label='Entrar' onClick={tryLogin}/>
    </div>
  )
}

const mapStateToProps = store => ({
  token: store.authState.token
});

export default connect(mapStateToProps)(Login)