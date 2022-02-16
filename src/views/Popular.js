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
        console.log("RES", res);

        this.setState({
          movies: res.results,
        });

        console.log(this.state.movies);
      });
  }

  render() {
    return (
      <div>
        <h1>POPULAR</h1>;
        <div>
          {this.state.movies.map((movie) => (
            <Card
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Popular;
