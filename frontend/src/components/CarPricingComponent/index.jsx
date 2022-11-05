import P from "prop-types";
import * as Styled from "./styles";

export const CarPricingComponent = ({ data }) => {
  const pricing = data.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

  return <Styled.Container>{pricing}</Styled.Container>;
};

CarPricingComponent.propTypes = {
  children: P.node.isRequired,
};
