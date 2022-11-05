import P from "prop-types";
import * as Styled from "./styles";

export const CarDescriptionComponent = ({ data = 2010 }) => {
  return <Styled.Container>{data}</Styled.Container>;
};

CarDescriptionComponent.propTypes = {
  data: P.number,
};
