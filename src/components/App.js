import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PlayersPage from "./players/PlayersPage";
import ManagePlayerPage from "./players/ManagePlayerPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/players" component={PlayersPage} />
        <Route path="/player/:id" component={ManagePlayerPage} />
        <Route Path="/player" component={ManagePlayerPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;