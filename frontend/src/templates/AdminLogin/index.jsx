import { warning } from "@remix-run/router";
import axios from "axios";
import P from "prop-types";
import { useEffect, useRef, useState } from "react";
import * as Styled from "./styles";
import { Navigate, useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (login) {
      return navigate("/admin/home");
    }
  }, [login]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!user || !password) {
      setError("Informações não digitadas");
      return;
    }

    const loginFunc = async () => {
      try {
        setError("");
        localStorage.clear();

        const response = await axios.post("http://localhost:3000/admin/login", {
          user,
          password,
        });

        const { token } = response.data;
        localStorage.setItem("user_token", token);
        setLogin(true);
      } catch (e) {
        setError(e.response.data.error);
        localStorage.clear();
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
    </Styled.Container>
  );
};

AdminLogin.propType = {};
