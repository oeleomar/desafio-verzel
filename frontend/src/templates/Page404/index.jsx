import P from "prop-types";
import { Link } from "react-router-dom";

export const Page404 = ({}) => {
  return (
    <div>
      <h1>Page not Found</h1>
      <Link to="/">Retornar para home</Link>
    </div>
  );
};

Page404.propTypes = {};
