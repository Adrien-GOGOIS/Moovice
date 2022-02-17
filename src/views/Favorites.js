import React from "react";
import Card from "../components/Card";

import styled from "styled-components";

// const storage = localStorage.getItem("savedMovies");

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

  // LE COMPONENT DID MOUNT PARCOURE LES ID STOCKES ET APPELLE GETMOVIE() AVEC POUR RECUPERER LES FILMS EN QUESTION
  componentDidMount() {
    console.log("STATES FAVIDS", this.state.favIDs);

    // if (this.state.movies.length !== 0) {
    this.state.favIDs.map((idNum) => {
      this.getMovie(idNum);
    });
    // }
  }

  // RECUPERE LE LOCAL STORAGE STOCKE DANS LA VARIABLE STORAGE ET LE RETRANSFORME EN JSON
  getStorage() {
    let storage1 = JSON.parse(localStorage.getItem("savedMovies"));
    let storage2 = JSON.parse(localStorage.getItem("savedPopMovies"));

    console.log("TOTAL STORAGE", storage1.concat(storage2));
    return storage1.concat(storage2);
  }

  removeMovie(id) {
    let indexMovie = this.state.favIDs.indexOf(id);
    console.log(indexMovie);

    this.setState({
      movies: this.state.movies.splice(indexMovie, 1),
    });
  }

  // APPEL DE L'API POUR RECUPERER FILM PAR ID
  getMovie(id) {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=f9e1d8b71b4f67f5c7ba670942943029`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movies: [...this.state.movies, res],
        });
        // console.log("STATE MOVIES", this.state.movies);
      });
  }

  render() {
    return (
      <>
        <Title>FAVORITES</Title>

        {this.state.favIDs === null && <h2>Pas de favoris enregistré !</h2>}

        {this.state.movies.length !== 0 && (
          <>
            {/* Component Card info film */}
            {this.state.movies.map((movie) => {
              return (
                <>
                  <Card
                    image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    title={movie.title}
                    year={movie.release_date}
                    key={movie.poster_path}
                  />
                  <button onClick={() => this.removeMovie(movie.id)}>
                    Supprimer
                  </button>
                </>
              );
            })}
          </>
        )}
      </>
    );
  }
}

const Title = styled.h1`
  text-align: center;
  margin: 25px 200px;
  border: solid rgba(100, 100, 250, 0.5);
  border-radius: 10px;
  padding: 20px 0;
`;

export default Favorites;
