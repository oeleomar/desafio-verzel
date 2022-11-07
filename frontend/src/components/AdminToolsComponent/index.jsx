import { PencilSimple, Trash } from "phosphor-react";
import P from "prop-types";
import * as Styled from "./styles";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { UpdateCarComponent } from "../UpdateCarComponent";

export const AdminToolsComponent = ({ data, token }) => {
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    if (deleted) {
      location.reload();
    }

    if (error) {
      return navigate("/admin");
    }
  }, [deleted, error]);

  const handleDelete = () => {
    setError(false);
    setDeleted(false);

    const deleteAction = async () => {
      try {
        const deleted = await axios.delete(
          `http://localhost:3000/car/${data._id}`,
          { headers: { Authorization: "Bearer " + token } },
        );
        setDeleted(true);
      } catch (e) {
        console.log(e);
        if (e.response.data.error === "Acesso negado") {
          setError(true);
        }
      }
    };
    deleteAction();
  };

  const handleEdit = () => {};

  return (
    <Styled.MainContainer>
      <Dialog.Root>
        <Dialog.Trigger>
          <PencilSimple size={32} className="pencil" onClick={handleEdit} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <UpdateCarComponent data={data} token={token} />
        </Dialog.Portal>
      </Dialog.Root>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Styled.TrashContainer>
            <Trash size={32} className="trash" />
          </Styled.TrashContainer>
        </AlertDialog.Trigger>
        <AlertDialog.Overlay className="background-wrapper" />
        <AlertDialog.Content className="content">
          <AlertDialog.Title className="content__title">
            Voce tem certeza que deseja apagar?
          </AlertDialog.Title>
          <AlertDialog.Description className="content__description">
            Essa ação não poderá ser revertida posteriormente, ela irá
            permanentemente deletar todos as informações desse item de nossos
            servidores.
          </AlertDialog.Description>
          <Styled.Flex>
            <AlertDialog.Cancel asChild className="content__button-cancel">
              <Styled.ButtonCancel>Cancelar</Styled.ButtonCancel>
            </AlertDialog.Cancel>
            <AlertDialog.Action
              onClick={handleDelete}
              className="content__button-action"
            >
              Sim, apagar
            </AlertDialog.Action>
          </Styled.Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Styled.MainContainer>
  );
};

AdminToolsComponent.propTypes = {};
