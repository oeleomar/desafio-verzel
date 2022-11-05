import P from "prop-types";
import * as Styled from "./styles";

export const CarTitleComponent = ({ data }) => {
  return (
    <Styled.Container>
      <h3>{data}</h3>
    </Styled.Container>
  );
};

CarTitleComponent.propTypes = {
  data: P.string.isRequired,
};
