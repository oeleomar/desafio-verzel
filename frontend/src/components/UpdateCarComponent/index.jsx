import P from "prop-types";
import * as Styled from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { X } from "phosphor-react";
import axios from "axios";

export const UpdateCarComponent = ({ data, token }) => {
  const [nome, setNome] = useState(data.nome);
  const [marca, setMarca] = useState(data.marca);
  const [modelo, setModelo] = useState(data.modelo);
  const [preco, setPreco] = useState(data.preco);
  const [ano, setAno] = useState(data.ano);

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
        const data2 = await axios({
          method: "put",
          url: `http://localhost:3000/car/${data._id}`,
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        console.log(data2);
        setSuccess(true);
      } catch (e) {
        console.log(e);
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
          <input type="file" name="picture" id="picture" />

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

UpdateCarComponent.propTypes = {};
