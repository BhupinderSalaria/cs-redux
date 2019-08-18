import React from "react";
import { Route, Switch } from "react-router-dom";
// import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PlayersPage from "./players/PlayersPage";
import ManagePlayerPage from "./players/ManagePlayerPage";
import ManageCoachPage from "./coaches/ManageCoachPage";
import GameTilesPage from "./home/GameTilesPage";
import CoachesPage from "./coaches/CoachesPage";
import CoachProfiles from "./coaches/CoachProfiles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={GameTilesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/players" component={PlayersPage} />
        <Route path="/player/:id?" component={ManagePlayerPage} />
        <Route path="/coaches" component={CoachesPage} />
        <Route path="/coach/:id?" component={ManageCoachPage} />
        <Route path="/coachprofiles/:id?" component={CoachProfiles} />

        <Route Path="/allgames" component={GameTilesPage} />
        <Route component={PageNotFound} />
        <Route Path="/player" component={ManagePlayerPage} />
        <Route Path="/coach" component={ManageCoachPage} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
