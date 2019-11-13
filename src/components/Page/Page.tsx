import React from "react";
import PageHeader from '../PageHeader/PageHeader';

const Page: React.FC = (props) => {
  return (
    <div className="page">
      <PageHeader/>
      <div className="page__content">{props.children}</div>
    </div>
  );
};

export default Page;
