import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCoaches, saveCoach } from "../../redux/actions/coachActions";
import { loadGames } from "../../redux/actions/gameActions";
import PropTypes from "prop-types";
import CoachForm from "./CoachForm";
import { newCoach } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageCoachPage({
  coaches,
  games,
  loadCoaches,
  loadGames,
  saveCoach,
  history,
  ...props
}) {
  const [coach, setCoach] = useState({ ...props.coach });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (coaches.length === 0) {
      loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    } else {
      setCoach({ ...props.coach });
    }

    if (games.length === 0) {
      loadGames().catch(error => {
        alert("Loading Games failed" + error);
      });
    }
  }, [props.coach]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCoach(prevCoach => ({
      ...prevCoach,
      [name]: name === "gameId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { name, gameId, experience } = coach;
    const errors = {};

    if (!name) errors.name = "Name is Required";
    if (!gameId) errors.game = "Game is Required";
    if (!experience) errors.experience = "Experience is Required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveCoach(coach)
      .then(() => {
        toast.success("Coach Saved.");
        history.push("/coaches");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return coaches.length == 0 || coaches.length == 0 ? (
    <Spinner />
  ) : (
   
    <CoachForm
      coach={coach}
      errors={errors}
      games={games}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
    
  );
}

ManageCoachPage.propTypes = {
  coach: PropTypes.object.isRequired,
  coaches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  loadCoaches: PropTypes.func.isRequired,
  loadGames: PropTypes.func.isRequired,
  saveCoach: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCoachById(coaches, id) {
  debugger;
  return coaches.find(coach => coach.id == id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  debugger;
  const coach =
    id && state.coaches.length > 0 ? getCoachById(state.coaches, id) : newCoach;
  debugger;
  return {
    coach,
    coaches: state.coaches,
    games: state.games
  };
}

const mapDispatchToProps = {
  loadCoaches,
  loadGames,
  saveCoach
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoachPage);
