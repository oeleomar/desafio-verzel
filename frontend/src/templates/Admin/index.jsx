import axios from "axios";
import P from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { AdminCarComponent } from "../../components/AdminCarComponent";
import { LoadingComponent } from "../../components/LoadingComponent";
import { SectionComponent } from "../../components/SectionComponent";
import * as Styled from "./styles";
import { ModifyCarComponent } from "../../components/ModifyCarComponent";

export const Admin = ({}) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("user_token");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!token) {
      return navigate("/admin");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const raw = await axios("http://localhost:3000/car");
      setData(raw.data.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <LoadingComponent />;
  }
  return (
    <Styled.Container>
      <Styled.Title>Admin Page</Styled.Title>
      <Dialog.Root>
        <Styled.AddContainer>
          <Dialog.Trigger className="trigger">
            Adicionar novo carro
          </Dialog.Trigger>
        </Styled.AddContainer>
        <Dialog.Portal>
          <ModifyCarComponent token={token} />
        </Dialog.Portal>
      </Dialog.Root>

      <SectionComponent>
        {data.length > 0
          ? data.map((val) => (
              <AdminCarComponent data={val} key={val._id} token={token} />
            ))
          : "Nada Encontrado"}
      </SectionComponent>
    </Styled.Container>
  );
};

Admin.propTypes = {};
