import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CoachForm = ({
  coach,
  games,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{coach.id ? "Edit" : "Add"} Coach</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={coach.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="gameId"
        label="Game"
        value={coach.gameId || ""}
        defaultOption="Select Game"
        options={games.map(game => ({
          value: game.id,
          text: game.name
        }))}
        onChange={onChange}
        error={errors.game}
      />

      <TextInput
        name="experience"
        label="Experience"
        value={coach.experience}
        onChange={onChange}
        error={errors.experience}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CoachForm.propTypes = {
  games: PropTypes.array.isRequired,
  coach: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CoachForm;
