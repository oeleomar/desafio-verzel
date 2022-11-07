import P from "prop-types";
import * as Styled from "./styles";

export const SectionComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionComponent.propTypes = {
  children: P.node,
};
