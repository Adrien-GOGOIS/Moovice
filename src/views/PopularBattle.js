import React from "react";

import styled from "styled-components";

import Card from "../components/Card";

// CREATION D'UNE VARIABLE POUR STOCKER TEMPORAIREMENT LES FILMS CHOISIS
const storage = [];

class PopularBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentBattle: 0,
      savedPopMovies: JSON.parse(localStorage.getItem("savedPopMovies")),
    };

    this.chooseMovie = this.chooseMovie.bind(this);
  }

  // APPEL DE L'API DANS LE COMPONENTDIDMOUNT()
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9e1d8b71b4f67f5c7ba670942943029"
    )
      .then((res) => res.json())
      .then((res) => {
        // Stockage des données dans le state
        this.setState({
          movies: res.results,
        });
      });
  }

  // Fonction de choix d'un film en "battle"

  chooseMovie(id) {
    this.setState({
      currentBattle: this.state.currentBattle + 2,
    });

    // Si l'ID du film n'a pas encore été stocké, on le push dans la variable provisoire créé au début
    if (storage.indexOf(id) === -1) {
      storage.push(id);
    }

    // On envoie cette variable dans le local storage
    localStorage.setItem("savedPopMovies", JSON.stringify(storage));
  }

  // RENDER
  render() {
    return (
      <div>
        <Title>POPULAR BATTLE</Title>

        {/* Si les 20 films ont été parcouru, 10 films ont été stocké donc on arrête tout */}

        {storage.length === this.state.movies.length / 2 && (
          <h2>Vous avez parcouru tous les films !</h2>
        )}

        {/* Une fois qu'on est sûr d'avoir récupéré la liste des films, et qu'on a pas stocké plus de la moitié dans le local storage, 
        on affiche les 2 premières cartes en fonction de l'ID contenu dans le state "currentBattle" */}

        {this.state.movies.length !== 0 && storage.length < 10 && (
          <>
            <StyledButton
              // On clique sur la carte afin d'appeler la fonction de sauvegarde du choix "chooseMovie()"
              // qui prend en paramètre l'ID du film actuel (selon le state de "currentBattle")
              onClick={() =>
                this.chooseMovie(this.state.movies[this.state.currentBattle].id)
              }
            >
              {/* Component Card info film */}
              <Card
                image={`https://image.tmdb.org/t/p/w300/${
                  this.state.movies[this.state.currentBattle].poster_path
                }`}
                title={this.state.movies[this.state.currentBattle].title}
                year={this.state.movies[this.state.currentBattle].release_date}
                description={
                  this.state.movies[this.state.currentBattle].overview
                }
              />
            </StyledButton>
            <SubTitle>VS</SubTitle>
            <StyledButton
              // IDEM avec le film suivant ("currentBattle + 1")
              onClick={() =>
                this.chooseMovie(
                  this.state.movies[this.state.currentBattle + 1].id
                )
              }
            >
              {/* Component Card info film */}
              <Card
                image={`https://image.tmdb.org/t/p/w300/${
                  this.state.movies[this.state.currentBattle + 1].poster_path
                }`}
                title={this.state.movies[this.state.currentBattle + 1].title}
                year={
                  this.state.movies[this.state.currentBattle + 1].release_date
                }
                description={
                  this.state.movies[this.state.currentBattle + 1].overview
                }
              />
            </StyledButton>
          </>
        )}
      </div>
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

const StyledButton = styled.button`
  margin: 20px 50px;
  padding: 0;
  background-color: rgba(138, 185, 255, 1);
  border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 10px 10px rgba(050, 050, 050, 1);
`;

const SubTitle = styled.h2`
  text-align: center;
  margin: 20px 100px;
  padding: 5px 0;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
`;

export default PopularBattle;
