import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayersList = ({ players }) => (
  <table className="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Coach Name</td>
        <td>Game</td>
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
  ).isRequired
};

export default PlayersList;
