import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCoaches } from "../../redux/actions/coachActions";
import PropTypes from "prop-types";
import CoachesList from "./CoachesList";

function CoachesPage({ coaches, loadCoaches }) {
  useEffect(() => {
    if (coaches.length === 0) {
      loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Coaches</h2>
      <CoachesList coaches={coaches} />
    </>
  );
}

CoachesPage.propTypes = {
  coaches: PropTypes.array.isRequired,
  loadCoaches: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    coaches: state.coaches
  };
}

const mapDispatchToProps = {
  loadCoaches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachesPage);
