import React from "react";
import {Link} from "react-router-dom";

const PageHeader: React.FC = () => {
  return (
    <div className="page__header">
      <Link className="page__header__link" to={{pathname: '/'}}><h2>cinema-react</h2></Link>
    </div>
  );
};

export default PageHeader;
