import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoachesList = ({ coaches }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Game Id</th>
        <th>Experience(Yrs)</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {coaches.map(coach => {
        return (
          <tr key={coach.id}>
            <td>{coach.id}</td>
            <td>
              <Link to={"/coach/" + coach.id}>{coach.name}</Link>
            </td>
            <td>{coach.gameId}</td>
            <td>{coach.experience}</td>
            <td />
          </tr>
        );
      })}
    </tbody>
  </table>
);

CoachesList.propTypes = {
  coaches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gameId: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CoachesList;
