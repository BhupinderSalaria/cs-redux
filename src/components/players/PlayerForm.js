import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const PlayerForm = ({
  player,
  coaches,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{player.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={player.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="coachId"
        label="Coach"
        value={player.coachId || ""}
        defaultOption="Select Coach"
        options={coaches.map(coach => ({
          value: coach.id,
          text: coach.name
        }))}
        onChange={onChange}
        error={errors.coach}
      />

      <TextInput
        name="game"
        label="Game"
        value={player.game}
        onChange={onChange}
        error={errors.game}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

PlayerForm.propTypes = {
  coaches: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PlayerForm;
