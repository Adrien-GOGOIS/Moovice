import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// VIEWS
import Weekly from "./views/Weekly";
import WeeklyBattle from "./views/WeeklyBattle";
import Popular from "./views/Popular";
import PopularBattle from "./views/PopularBattle";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Link className="link" style={{ margin: "10px" }} to="/">
              HOME
            </Link>

            <Link className="link" style={{ margin: "10px" }} to="/weekly">
              WEEKLY
            </Link>

            <Link
              className="link"
              style={{ margin: "10px" }}
              to="/weekly-battle"
            >
              WEEKLY BATTLE
            </Link>

            <Link className="link" style={{ margin: "10px" }} to="/popular">
              POPULAR
            </Link>

            <Link
              className="link"
              style={{ margin: "10px" }}
              to="/popular-battle"
            >
              POPULAR BATTLE
            </Link>

            <Link className="link" style={{ margin: "10px" }} to="/favorites">
              FAVORITES
            </Link>
          </Navbar>
        </div>

        <Switch>
          <Route exact path="/weekly" component={Weekly} />
          <Route exact path="/weekly-battle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular-battle" component={PopularBattle} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 15px 20px;
  text-align: center;

  .link {
    text-decoration: none;
    padding: 5px;
    background-color: aliceblue;
    color: black;
  }

  .link:hover {
    font-weight: bold;
  }
`;

export default App;
