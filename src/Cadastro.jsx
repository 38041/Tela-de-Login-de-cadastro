import React from "react";
import "./App.css";
import { Link } from "react-router";

function Cadastro()
const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); {
  return (
    <>
      <div>
        Página 2
        <br />
        <Link to="/"> Login</Link>
      </div>
      const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
  )         
  <div className="input-field">
          <input
            type="Name"
            placeholder="Nome"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />

        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
          
          </label>
        </div>
        <button type="submit">Cadastrar</button>
        <div className="signup-link">
        <p>
           Já tem conta? <a href="#">Logar</a>{" "}
          </p>
        </div>
      </form>
    </div>
    </>
  );
}

export default Cadastro;