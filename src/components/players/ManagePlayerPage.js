import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPlayers } from "../../redux/actions/playerActions";
import { loadCoaches } from "../../redux/actions/coachActions";
import PropTypes from "prop-types";
import PlayerForm from "./PlayerForm";
import { newPlayer } from "../../../tools/mockData";

function ManagePlayerPage({ players, coaches, loadPlayers, loadCoaches }) {
  useEffect(() => {
    if (players.length === 0) {
      loadPlayers().catch(error => {
        alert("Loading Players failed" + error);
      });
    }

    if (coaches.length === 0) {
      loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage Player</h2>
    </>
  );
}

ManagePlayerPage.propTypes = {
  player: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  coaches: PropTypes.array.isRequired,
  loadPlayers: PropTypes.func.isRequired,
  loadCoaches: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    player: newPlayer,
    players: state.players,
    coaches: state.coaches
  };
}

const mapDispatchToProps = {
  loadPlayers,
  loadCoaches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePlayerPage);
