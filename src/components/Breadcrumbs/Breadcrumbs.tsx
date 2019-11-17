import React from "react";
import {Link} from "react-router-dom";
import {Film} from "../../store/films/types";
import {Seance} from "../../store/seances/types";

interface breadcrumbsItem {
  label: string,
  pathname?: string,
  active?: boolean
}

interface BreadcrumbsProps {
  items: breadcrumbsItem[],
}

function generateBreadcrumb(item: breadcrumbsItem, index: number): JSX.Element {
  if (item.active) {
    return (
      <span className="breadcrumbs__item" key={index}>
        {item.label}
      </span>
    );
  }

  return (
    <Link className="breadcrumbs__item" key={index} to={{pathname: item.pathname}}>
      {item.label}
    </Link>
  );
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const breadcrumbItems: any[] = props.items
    .map((item, index) => generateBreadcrumb(item, index));

  return (
    <div className="breadcrumbs">
      {breadcrumbItems}
    </div>
  );
};

export default Breadcrumbs;
