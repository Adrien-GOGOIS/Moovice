import React from "react";

import Card from "../components/Card";

const storage = [];

class PopularBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentBattle: 0,
      savedMovies: JSON.parse(localStorage.getItem("savedMovies")),
    };

    this.chooseMovie = this.chooseMovie.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9e1d8b71b4f67f5c7ba670942943029"
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log("RES", res.results[0]);

        this.setState({
          movies: res.results,
        });

        // console.log("TEST NOM DU FILM", this.state.currentMovies);
      });
  }

  // Fonction de choix d'un film en "battle"

  chooseMovie(id) {
    this.setState({
      currentBattle: this.state.currentBattle + 2,
    });

    storage.push(id);
    console.log("STORAGE", storage);

    localStorage.setItem("savedMovies", JSON.stringify(storage));
    console.log("LOCAL STORAGE", storage);
  }

  // RENDER
  render() {
    return (
      <div>
        <h1>POPULAR BATTLE</h1>
        {this.state.movies.length !== 0 && (
          <>
            <button
              onClick={() =>
                this.chooseMovie(this.state.movies[this.state.currentBattle].id)
              }
            >
              <Card
                title={this.state.movies[this.state.currentBattle].title}
                year={this.state.movies[this.state.currentBattle].release_date}
                description={
                  this.state.movies[this.state.currentBattle].overview
                }
              />
            </button>
            <button
              onClick={() =>
                this.chooseMovie(
                  this.state.movies[this.state.currentBattle + 1].id
                )
              }
            >
              <Card
                title={this.state.movies[this.state.currentBattle + 1].title}
                year={
                  this.state.movies[this.state.currentBattle + 1].release_date
                }
                description={
                  this.state.movies[this.state.currentBattle + 1].overview
                }
              />
            </button>
          </>
        )}
      </div>
    );
  }
}

export default PopularBattle;
