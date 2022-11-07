import P from "prop-types";
import * as Styled from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export const ModifyCarComponent = ({ token }) => {
  let navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState(0);
  const [ano, setAno] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorToken, setErrorToken] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (errorToken) {
      return navigate("/admin");
    }

    if (success) {
      location.reload();
    }
  }, [errorToken, success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccess(false);
    setErrorToken(false);

    if (!nome || !marca || !modelo || preco === 0 || ano === 0) {
      setErrorMessage("Campos inválidos");
      return;
    }

    const submit = async () => {
      try {
        const formData = new FormData(e.target);
        const data = await axios({
          method: "post",
          url: "http://localhost:3000/car",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        setSuccess(true);
      } catch (e) {
        if (e.response.data.error === "Acesso negado") {
          setErrorToken(true);
        } else {
          setErrorMessage(e.response.data.error);
        }
      }
    };

    submit();
  };

  return (
    <Styled.Container>
      <Dialog.Overlay className="background-wrapper" />
      <Dialog.Content className="content">
        <Dialog.Title className="content__title">Carros</Dialog.Title>
        <Dialog.Description className="content__description">
          Formulário para cadastramento e atualização de carros.
        </Dialog.Description>
        <Styled.StyledMessageError>{errorMessage}</Styled.StyledMessageError>
        <form
          action="http://localhost:3000/car"
          encType="multipart/form-data"
          method="POST"
          onSubmit={handleSubmit}
        >
          <Styled.StyledLabel htmlFor="picture">
            Selecione uma foto
          </Styled.StyledLabel>
          <input type="file" name="picture" id="picture" required />

          <Styled.StyledLabel htmlFor="nome">Nome:</Styled.StyledLabel>
          <Styled.StyledInput
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Styled.StyledLabel htmlFor="marca">Marca:</Styled.StyledLabel>
          <Styled.StyledInput
            type="text"
            name="marca"
            id="marca"
            placeholder="Digite a marca"
            required
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />

          <Styled.StyledLabel htmlFor="modelo">Modelo:</Styled.StyledLabel>
          <Styled.StyledInput
            type="text"
            name="modelo"
            id="modelo"
            placeholder="Digite o modelo"
            required
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />

          <Styled.StyledLabel htmlFor="preco">Preço:</Styled.StyledLabel>
          <Styled.StyledInput
            type="number"
            name="preco"
            id="preco"
            placeholder="Digite o preço"
            required
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />

          <Styled.StyledLabel htmlFor="ano">Ano:</Styled.StyledLabel>
          <Styled.StyledInput
            type="number"
            name="ano"
            id="ano"
            placeholder="Digite o ano"
            required
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />

          <Styled.StyledButton type="submit" value="Enviar dados" />
        </form>

        <Dialog.Close className="content__close">
          <X size={22} />
        </Dialog.Close>
      </Dialog.Content>
    </Styled.Container>
  );
};

ModifyCarComponent.propTypes = {};
