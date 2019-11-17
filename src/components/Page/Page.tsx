import React from "react";
import PageHeader from '../PageHeader/PageHeader';

const Page: React.FC = (props) => {
  return (
    <div className="page">
      <PageHeader/>
      <div className="page__content-wrapper">{props.children}</div>
    </div>
  );
};

export default Page;
