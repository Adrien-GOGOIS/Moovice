import React from "react";

import Card from "../components/Card";

class PopularBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9e1d8b71b4f67f5c7ba670942943029"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("RES", res.results[0]);

        this.setState({
          movies: res.results,
        });

        console.log("TEST NOM DU FILM", this.state.currentMovies);
      });
  }

  render() {
    return (
      <div>
        <h1>POPULAR BATTLE</h1>
        {this.state.movies.length !== 0 && (
          <>
            <Card
              title={this.state.movies[0].title}
              year={this.state.movies[0].release_date}
              description={this.state.movies[0].overview}
            />
            <Card
              title={this.state.movies[1].title}
              year={this.state.movies[1].release_date}
              description={this.state.movies[1].overview}
            />
          </>
        )}
      </div>
    );
  }
}

export default PopularBattle;
