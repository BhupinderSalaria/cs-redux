import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCoaches } from "../../redux/actions/coachActions";
import { loadGames } from "../../redux/actions/gameActions";
import PropTypes from "prop-types";
import CoachesList from "./CoachesList";
import Spinner from "../common/Spinner";
//import { Redirect } from "react-router-dom";
function CoachesPage({ coaches, games, loadCoaches, loadGames, ...props }) {
  // const [redirectToAddCoachPage, setRedirectToAddCoachPage] = useState(false);

  useEffect(() => {
    //debugger;
    console.log(coaches);
    if (coaches.length === 0) {
      loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    }

    if (games.length === 0) {
      loadGames().catch(error => {
        alert("Loading Games failed" + error);
      });
    }
  }, []);

  // var handleRedirectToAddCoachPage = () => {
  //   setRedirectToAddCoachPage(true);
  // };

  return (
    <>
      {/* {redirectToAddCoachPage && <Redirect to="/coach" />} */}
      <h2>Coaches</h2>

      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-coach"
            //onClick={handleRedirectToAddCoachPage}
          >
            ADD Coach
          </button>

          <CoachesList coaches={coaches} />
        </>
      )}
    </>
  );
}

CoachesPage.propTypes = {
  coaches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  loadCoaches: PropTypes.func.isRequired,
  loadGames: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    coaches:
      state.games.length === 0
        ? []
        : state.coaches.map(coach => {
            return {
              ...coach,
              gameName: state.games.find(a => a.id === coach.gameId).name
            };
          }),
    games: state.games,
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadCoaches,
  loadGames
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachesPage);
