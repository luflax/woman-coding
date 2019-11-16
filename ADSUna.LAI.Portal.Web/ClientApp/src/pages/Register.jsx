import React, { useState } from "react";
import axios from "axios";
import {
  faUserAlt,
  faKey,
  faEnvelope,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toastr } from "react-redux-toastr";

import "./Register.css";
import InputButtonIcon from "../components/InputButtonIcon";
import ButtonIcon from "../components/ButtonIcon";

export default props => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tryingRegister, setTryingRegister] = useState(false);

  function verifyKey(e) {
    if (e.key == "Enter") {
      tryRegister();
    }
  }

  const tryRegister = async () => {
    const loginAndPasswordPattern = new RegExp("[a-zA-Z0-9]");
    const emailPattern = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );

    if (!login || login.length < 6 || !loginAndPasswordPattern.test(login)) {
      toastr.warning(
        "Nome de usuária inválido",
        "Deve conter no minimo 6 caracteres dentre letras e números."
      );
      return;
    }
    if (!email || email.length < 6 || !emailPattern.test(email)) {
      toastr.warning("Email inválido", "Informe um email válido.");
      return;
    }
    if (email != confirmEmail) {
      toastr.warning(
        "Combinação inválida de email",
        "Os dois emails não coincidem."
      );
      return;
    }
    if (
      !password ||
      email.length < 6 ||
      !loginAndPasswordPattern.test(password)
    ) {
      toastr.warning(
        "Senha inválida",
        "A senha deve conter no minimo 6 caracteres dentre letras e números."
      );
      return;
    }

    setTryingRegister(true);
    try {
      const response = await axios.post("api/auth/register", {
        login,
        email,
        password
      });

      toastr.info(
        "Conta criada com sucesso",
        "Agora faça login para ter acesso ao Woman Coding."
      );

      return props.history.push("/login");
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
        onKeyDown={verifyKey}
        inputValue={login}
      />

      <InputButtonIcon
        placeholder="Email"
        icon={faEnvelope}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={50}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={verifyKey}
        inputValue={email}
      />

      <InputButtonIcon
        placeholder="Confirmar email"
        icon={faEnvelope}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={50}
        onChange={e => setConfirmEmail(e.target.value)}
        onKeyDown={verifyKey}
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
        onKeyDown={verifyKey}
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
