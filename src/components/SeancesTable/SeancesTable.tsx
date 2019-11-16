import React from "react";
import {Seance} from "../../store/seances/types";
import {Link} from "react-router-dom";
import {useParams} from "react-router";

interface SeancesTableProps {
  seances: Seance[]
}

const SeancesTable: React.FC<SeancesTableProps> = (props) => {
  const {filmId} = useParams();
  const {seances} = props;
  const seancesRows = seances.map((seance, index) => (
    <tr className="table__tr" key={index}>
      <td className="table__td"><Link to={{pathname: `/${filmId}/${seance.id}`}}>Seance {seance.id}</Link></td>
      <td className="table__td digits">{seance.time}</td>
      <td className="table__td digits">{seance.hallNumber}</td>
    </tr>
  ));
  return (
    <div className="seances-table">
      <table className="table">
        <thead className="table__thead">
        <tr className="table__tr">
          <th className="table__th">Seance name</th>
          <th className="table__th digits">Seance time</th>
          <th className="table__th digits">Hall number</th>
        </tr>
        </thead>
        <tbody className="table__thead">
        {seancesRows}
        </tbody>
      </table>
    </div>
  );
};

export default SeancesTable;
