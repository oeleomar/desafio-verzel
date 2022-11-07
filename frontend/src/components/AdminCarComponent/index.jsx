import P from "prop-types";
import * as Styled from "./styles";

import { CarTitleComponent } from "../CarTitleComponent";
import { ImageCarComponent } from "../ImageCarComponent";
import { CarDescriptionComponent } from "../CarDescriptionComponent";
import { CarPricingComponent } from "../CarPricingComponent";
import { AdminToolsComponent } from "../AdminToolsComponent";

export const AdminCarComponent = ({ data, token }) => {
  const { _id, nome, marca, modelo, preco, foto, ano } = data;

  const completeName = `${marca.charAt(0).toUpperCase() + marca.slice(1)} ${
    modelo.charAt(0).toUpperCase() + modelo.slice(1)
  } ${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
  return (
    <Styled.Container>
      <Styled.ToolsComponent>
        <AdminToolsComponent data={data} token={token} />
      </Styled.ToolsComponent>
      <ImageCarComponent data={foto} />
      <Styled.TextContainer>
        <CarTitleComponent data={completeName} />
        <CarDescriptionComponent data={ano} />
        <CarPricingComponent data={preco} />
      </Styled.TextContainer>
    </Styled.Container>
  );
};

AdminCarComponent.propTypes = {
  data: P.object.isRequired,
};
