import React, { useState } from "react";
import axios from "axios";
import {
  faUserAlt,
  faKey,
  faEnvelope,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Register.css";
import InputButtonIcon from "../components/InputButtonIcon";
import ButtonIcon from "../components/ButtonIcon";

export default props => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tryingRegister, setTryingRegister] = useState(false);

  const tryRegister = async () => {
    const loginAndPasswordPattern = new RegExp("[a-zA-Z0-9]");
    const emailPattern = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );

    if (!login || login.length < 4 || !loginAndPasswordPattern.test(login)) {
      console.log("invalid username");
      return;
    }
    if (!email || email.length < 6 || !emailPattern.test(email)) {
      console.log("invalid email");
      return;
    }
    if (email != confirmEmail) {
      console.log("invalid email confirmation");
      return;
    }
    if (!password || !loginAndPasswordPattern.test(password)) {
      console.log("invalid password");
    }

    setTryingRegister(true);
    try {
      const response = await axios.post("api/auth/register", {
        login,
        email,
        password
      });

      console.log("Cadastro realizado");
      const {
        authenticated,
        message,
        accessToken,
        created,
        expiration
      } = response.data;
    } catch (error) {
      console.log(error);
    }

    setTryingRegister(false);
  };

  return (
    <div className="containerRegister">
      <h2>Cadastro da profissional</h2>
      <InputButtonIcon
        placeholder="Usuaria"
        icon={faUserAlt}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={20}
        onChange={e => setLogin(e.target.value)}
        inputValue={login}
      />

      <InputButtonIcon
        placeholder="Email"
        icon={faEnvelope}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={50}
        onChange={e => setEmail(e.target.value)}
        inputValue={email}
      />

      <InputButtonIcon
        placeholder="Confirmar email"
        icon={faEnvelope}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={50}
        onChange={e => setConfirmEmail(e.target.value)}
        inputValue={confirmEmail}
      />

      <InputButtonIcon
        placeholder="Senha"
        icon={faKey}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={30}
        secret
        onChange={e => setPassword(e.target.value)}
        inputValue={password}
      />

      <ButtonIcon label="Cadastrar" onClick={tryRegister} />

      {tryingRegister ? (
        <div className="overlayLoading">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="iconLoading"
            spin
            size="3x"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
