import React from "react";

import Card from "../components/Card";

class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9e1d8b71b4f67f5c7ba670942943029"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movies: res.results,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>POPULAR</h1>;
        <div>
          {this.state.movies.map((movie) => (
            <Card
              image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
              key={movie}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Popular;
