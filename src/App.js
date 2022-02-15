import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// VIEWS
import Weekly from "./views/Weekly";
import WeeklyBattle from "./views/WeeklyBattle";
import Popular from "./views/Popular";
import PopularBattle from "./views/PopularBattle";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

// let data;

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.askAPI = this.askAPI.bind(this);
  // }

  // askAPI() {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/76341?api_key=f9e1d8b71b4f67f5c7ba670942943029"
  //   )
  //     .then((res) => res.json)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">HOME</Link>

            <Link to="/weekly">WEEKLY</Link>

            <Link to="/weekly-battle">WEEKLY BATTLE</Link>

            <Link to="/popular">POPULAR</Link>

            <Link to="/popular-battle">POPULAR BATTLE</Link>

            <Link to="/favorites">FAVORITES</Link>
          </nav>
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

export default App;