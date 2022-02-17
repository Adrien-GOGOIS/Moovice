import React from "react";

import Card from "../components/Card";
import styled from "styled-components";

import moment from "moment";

const today = moment().format("YYYY-MM-DD");
console.log(today);

const lastWeek = moment().add(-7, "days").format("YYYY-MM-DD");
console.log(lastWeek);

class Weekly extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=f9e1d8b71b4f67f5c7ba670942943029`
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
        <Title>WEEKLY</Title>
        <div>
          {this.state.movies.map((movie) => (
            <Card
              image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
              key={this.state.movies}
            />
          ))}
        </div>
      </div>
    );
  }
}

const Title = styled.h1`
  text-align: center;
  margin: 60px 200px;
  border: solid rgba(100, 100, 250, 0.5);
  border-radius: 10px;
  padding: 20px 0;
`;

export default Weekly;
