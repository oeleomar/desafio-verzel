import P from "prop-types";
import { CarTitleComponent } from "../CarTitleComponent";
import { ImageCarComponet } from "../ImageCarComponent";
import { CarDescriptionComponent } from "../CarDescriptionComponent";
import * as Styled from "./styles";
import { CarPricingComponent } from "../CarPricingComponent";

export const CarComponent = ({ data }) => {
  console.log(data);
  const { nome, marca, modelo, preco, foto, ano } = data;
  const completeName = `${marca.charAt(0).toUpperCase() + marca.slice(1)} ${
    modelo.charAt(0).toUpperCase() + modelo.slice(1)
  } ${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
  return (
    <Styled.Container>
      <ImageCarComponet data={foto} />
      <Styled.TextContainer>
        <CarTitleComponent data={completeName} />
        <CarDescriptionComponent data={ano} />
        <CarPricingComponent data={preco} />
      </Styled.TextContainer>
    </Styled.Container>
  );
};

CarComponent.propTypes = {
  data: P.object.isRequired,
};
