import React from "react";

import Card from "../components/Card";

import moment from "moment";
moment().format();

const now = moment();
console.log(now);

class Weekly extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=f9e1d8b71b4f67f5c7ba670942943029"
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
        <h1>WEEKLY</h1>;
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

export default Weekly;
