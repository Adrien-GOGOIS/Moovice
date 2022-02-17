import React from "react";

import styled from "styled-components";

import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <StyleCard>
        <div>
          <img src={this.props.image} alt="Affiche du film" />
          <p className="title">{this.props.title}</p>
          <p className="release">{this.props.year}</p>
          <p className="description">{this.props.description}</p>
        </div>
      </StyleCard>
    );
  }
}

const StyleCard = styled.div`
  img {
    width: 10%;
    height: 25vh;
    border-radius: 20px;
  }

  div {
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: rgba(240, 240, 240, 0.8);
    border-radius: 20px;
  }

  .title {
    font-weight: bold;
    width: 20%;
    border-right: solid black 1px;
    font-size: 150%;
    padding: 30px;
  }

  .release {
    width: 10%;
    border-right: solid black 1px;
    padding: 30px;
  }

  .description {
    width: 60%;
    padding: 30px;
  }
`;

export default Card;
