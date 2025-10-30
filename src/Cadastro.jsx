import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>CADASTRO</h1>

        <div className="input-group">
          <label>NOME COMPLETO:</label>
          <input type="text" placeholder="Digite seu nome completo" />
        </div>

        <div className="input-group">
          <label>EMAIL:</label>
          <input type="email" placeholder="Digite seu e-mail" />
        </div>

        <div className="input-group">
          <label>SENHA:</label>
          <input type="password" placeholder="Crie uma senha" />
        </div>

        <button className="btn-login">CADASTRAR</button>

        <p className="register-text">
          Já tem conta?{" "}
          <small>
            <Link to="/">Fazer login</Link>
          </small>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;

    
 