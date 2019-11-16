import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  faUserAlt,
  faKey,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toastr } from "react-redux-toastr";

import "./Login.css";
import InputButtonIcon from "../components/InputButtonIcon";
import ButtonIcon from "../components/ButtonIcon";
import { Container } from "react-bootstrap";
import { changeToken } from "../actions";
import { bindActionCreators } from "redux";

const Login = props => {
  const [tryingLogin, setTryingLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function verifyKey(e) {
    if (e.key == "Enter") {
      tryLogin();
    }
  }

  const tryLogin = async () => {
    setTryingLogin(true);

    try {
      const response = await axios.post("api/auth/login", {
        login: username,
        password
      });
      const {
        authenticated,
        message,
        accessToken,
        created,
        expiration
      } = response.data;
      if (!authenticated) {
        toastr.error("Não foi possivel entrar", message);
      } else {
        localStorage.setItem("authorization", JSON.stringify(response.data));
        props.history.push("/community");
        return;
      }
    } catch (error) {
      toastr.error("Não foi possivel entrar", error);
    }

    setTryingLogin(false);
  };

  return (
    <div className="containerLogin">
      <h2>Área da profissional</h2>
      <InputButtonIcon
        placeholder="Usuaria"
        icon={faUserAlt}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        maxLength={50}
        onKeyDown={verifyKey}
        onChange={e => setUsername(e.target.value)}
        inputValue={username}
      />

      <InputButtonIcon
        placeholder="Senha"
        icon={faKey}
        placeholderColor="#fff"
        inputBorderColor="#d4d4d4"
        secret
        maxLength={30}
        onKeyDown={verifyKey}
        onChange={e => setPassword(e.target.value)}
        inputValue={password}
      />

      {tryingLogin ? (
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

      <ButtonIcon label="Entrar" onClick={tryLogin} />
    </div>
  );
};

const mapStateToProps = store => ({
  token: store.authState.token
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeToken }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
