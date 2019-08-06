import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPlayers, savePlayer } from "../../redux/actions/playerActions";
import { loadCoaches } from "../../redux/actions/coachActions";
import PropTypes from "prop-types";
import PlayerForm from "./PlayerForm";
import { newPlayer } from "../../../tools/mockData";
import { getplayerByid } from "../../api/playerApi";

function ManagePlayerPage({
  players,
  coaches,
  loadPlayers,
  loadCoaches,
  savePlayer,
  history,
  ...props
}) {
  const [player, setPlayer] = useState({ ...props.player });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (players.length === 0) {
      loadPlayers().catch(error => {
        alert("Loading Players failed" + error);
      });
    } else {
      setPlayer({ ...props.player });
    }

    if (coaches.length === 0) {
      loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    }
  }, [props.player]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [name]: name === "coachId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    savePlayer(player).then(() => {
      history.push("/players");
    });
  }

  return (
    <PlayerForm
      player={player}
      errors={errors}
      coaches={coaches}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManagePlayerPage.propTypes = {
  player: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  coaches: PropTypes.array.isRequired,
  loadPlayers: PropTypes.func.isRequired,
  loadCoaches: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getPlayerById(players, id) {
  return players.find(player => player.id == id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const player =
    id && state.players.length > 0
      ? getPlayerById(state.players, id)
      : newPlayer;
  // debugger;
  return {
    player,
    players: state.players,
    coaches: state.coaches
  };
}

const mapDispatchToProps = {
  loadPlayers,
  loadCoaches,
  savePlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePlayerPage);
