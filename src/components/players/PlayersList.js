import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayersList = ({ players, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Coach Name</th>
        <th>Game</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {players.map(player => {
        return (
          <tr key={player.id}>
            <td>
              <Link to={"/player/" + player.id}>{player.name}</Link>
            </td>
            <td>{player.coachName}</td>
            <td>{player.game}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(player)}
              >
                DELETE
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

PlayersList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      coachId: PropTypes.number.isRequired,
      game: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default PlayersList;
