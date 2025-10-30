import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>LOGIN</h1>

        <div className="input-group">
          <label>USUÁRIO:</label>
          <input type="text" placeholder="Digite seu usuário" />
        </div>

        <div className="input-group">
          <label>SENHA:</label>
          <input type="password" placeholder="Digite sua senha" />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" /> Manter conectado
          </label>
          <a href="#">esqueceu a senha?</a>
        </div>

        <button className="btn-login">ENTRAR</button>

        <p className="social-text">Logar</p>
        <div className="social-login">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook" />
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
          <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" />
        </div>

        <p className="register-text">
          Não tem conta?{" "}
          <small>
            <Link to="/cadastro">Cadastre-se</Link>
          </small>
        </p>
      </div>
    </div>
  );
}

export default Login;
