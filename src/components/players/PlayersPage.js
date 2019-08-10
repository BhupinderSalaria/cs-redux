import React from "react";
import { connect } from "react-redux";
import * as playerActions from "../../redux/actions/playerActions";
import * as coachActions from "../../redux/actions/coachActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import PlayerList from "./PlayersList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class PlayersPage extends React.Component {
  state = {
    redirectToAddPlayerPage: false
  };

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

  handleDeletePlayer = async player => {
    toast.success("Player deleted");
    try {
      await this.props.actions.deletePlayer(player);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddPlayerPage && <Redirect to="/player" />}
        <h2>Players</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-player"
              onClick={() => this.setState({ redirectToAddPlayerPage: true })}
            >
              ADD PLAYER
            </button>

            <PlayerList
              onDeleteClick={this.handleDeletePlayer}
              players={this.props.players}
            />
          </>
        )}
      </>
    );
  }
}

PlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  coaches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
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
    coaches: state.coaches,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch),
      loadCoaches: bindActionCreators(coachActions.loadCoaches, dispatch),
      deletePlayer: bindActionCreators(playerActions.deletePlayer, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersPage);
