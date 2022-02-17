import React from "react";

const storage = localStorage.getItem("savedMovies");
console.log(storage);

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };

    this.getStorage = this.getStorage.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  getStorage() {
    return storage;
  }

  getMovie(id) {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=f9e1d8b71b4f67f5c7ba670942943029`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movies: [...this.state.movies, res],
        });
      });
  }

  render() {
    return <h1>FAVORITES</h1>;
  }
}

export default Favorites;
