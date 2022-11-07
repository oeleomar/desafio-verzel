import { warning } from "@remix-run/router";
import axios from "axios";
import P from "prop-types";
import { useRef, useState } from "react";
import * as Styled from "./styles";
import { Navigate } from "react-router-dom";

export const AdminLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    console.log(user, password);
    console.log(error);

    if (!user || !password) {
      setError("Informações não digitadas");
      return;
    }

    console.log(user, password);
    const loginFunc = async () => {
      try {
        setError("");
        const response = await axios.post("http://localhost:3000/admin/login", {
          user,
          password,
        });

        const { token } = response.data;
        localStorage.setItem("user_token", JSON.stringify(token));
        setLogin(true);
      } catch (e) {
        setError(e.response.data.error);
        return;
      }
    };
    loginFunc();
  };

  return (
    <Styled.Container>
      <form action="" onSubmit={handleSubmit}>
        <img src="/logo.png" alt="Logo verzel" />
        <h2>Conta de administrador</h2>

        <fieldset>
          <Styled.Alert>{error}</Styled.Alert>

          <label htmlFor="user">Usuário</label>
          <span className="warning"></span>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="Digite seu usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <span className="warning"></span>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Entrar" className="button-submit" />
        </fieldset>
      </form>
      {login && <Navigate replace to="/admin/home" />}
    </Styled.Container>
  );
};

AdminLogin.propType = {};
