import React from "react";

interface HallRowProps {
  rowNumber: number
}

const HallRow: React.FC<HallRowProps> = (props) => {
  const {rowNumber} = props;
  return (
    <div className="hall__row">
      <div className="hall__row__title">Row {rowNumber}</div>
      <div className="hall__row__seats">{props.children}</div>
    </div>
  );
};

export default HallRow;
