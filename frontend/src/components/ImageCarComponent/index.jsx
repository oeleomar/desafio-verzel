import P from "prop-types";
import * as Styled from "./styles";

export const ImageCarComponent = ({ data }) => {
  return (
    <Styled.Container>
      <img
        src={`http://localhost:3000/uploads/${data}`}
        alt="Imagem de carros"
      />
    </Styled.Container>
  );
};

ImageCarComponent.propTypes = {
  data: P.string.isRequired,
};
