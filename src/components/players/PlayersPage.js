import React from "react";
import { connect } from "react-redux";
import * as playerActions from "../../redux/actions/playerActions";
import * as coachActions from "../../redux/actions/coachActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import PlayerList from "./PlayersList";

class PlayersPage extends React.Component {
  componentDidMount() {
    if (this.props.players.length === 0) {
      this.props.actions.loadPlayers().catch(error => {
        alert("Loading Players failed" + error);
      });
    }

    if (this.props.coaches.length === 0) {
      this.props.actions.loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Players</h2>
        <PlayerList players={this.props.players} />
      </>
    );
  }
}

PlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  coaches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    players:
      state.coaches.length === 0
        ? []
        : state.players.map(player => {
            return {
              ...player,
              coachName: state.coaches.find(a => a.id === player.coachId).name
            };
          }),
    coaches: state.coaches
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch),
      loadCoaches: bindActionCreators(coachActions.loadCoaches, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersPage);
