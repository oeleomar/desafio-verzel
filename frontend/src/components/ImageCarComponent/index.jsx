import P from "prop-types";
import * as Styled from "./styles";

export const ImageCarComponet = ({ data }) => {
  console.log(data);
  return (
    <Styled.Container>
      <img
        src={`http://localhost:3000/uploads/${data}`}
        alt="Imagem de carros"
      />
    </Styled.Container>
  );
};

ImageCarComponet.propTypes = {
  data: P.string.isRequired,
};
