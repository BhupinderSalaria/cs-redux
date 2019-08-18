import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadGames } from "../../redux/actions/gameActions";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";

function GameTilesPage({ games, loadGames, ...props }) {
  useEffect(() => {
    if (games.length === 0) {
      loadGames().catch(error => {
        alert("Loading Games failed" + error);
      });
    }
  }, []);

  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <Row>
            {games.map(game => {
              return (
                <Col key={game.id} sm="4">
                  <Card body>
                    <Link to={"/coachprofiles/" + game.id}>
                      {" "}
                      <CardImg
                        top
                        width="100px"
                        height="150px"
                        src={
                          game.imgUrl
                            ? "./public/" + game.imgUrl
                            : "./public/Sports.jpg"
                        }
                        alt="Card image cap"
                      />
                    </Link>
                    <CardTitle>{game.name}</CardTitle>
                    <CardText>
                      Find the Coach of {game.name} and know the relevant
                      information.
                    </CardText>
                    <Link to={"/coachprofiles/" + game.id}>
                      Find {game.name} Coach
                    </Link>
                    {/* <Button>Find {game.name} Coach</Button> */}
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

GameTilesPage.propTypes = {
  games: PropTypes.array.isRequired,
  loadGames: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games,
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  loadGames
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameTilesPage);
