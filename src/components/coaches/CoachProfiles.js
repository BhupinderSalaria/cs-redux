import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCoaches } from "../../redux/actions/coachActions";
import Spinner from "../common/Spinner";

import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";

function CoachProfiles({ coaches, loadCoaches, ...props }) {
  useEffect(() => {
    if (coaches.length === 0) {
      loadCoaches().catch(error => {
        alert("Loading Coaches failed" + error);
      });
    }
  }, []);

  return coaches.length == 0 ? (
    <h3>Record Not Found</h3>
  ) : (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            {coaches.map(coach => {
              return (
                <Col key={coach.id} sm="4">
                  <Card body>
                    <CardImg
                      top
                      width="100px"
                      height="150px"
                      src="../public/Profile.png"
                      alt="Profile image cap"
                    />
                    <CardTitle>{coach.name}</CardTitle>
                    <CardText>{coach.experience} Years Experience</CardText>
                    <CardText>Phone Number : (+91) {coach.phoneno}</CardText>

                    <Button>Select Coach</Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}

CoachProfiles.propTypes = {
  coaches: PropTypes.array.isRequired,
  loadCoaches: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  //debugger;
  return {
    coaches: state.coaches.filter(function(coach) {
      return coach.gameId == id;
    }),
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadCoaches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoachProfiles);
