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
          <p className="release">
            Date de sortie <span>{this.props.year}</span>
          </p>
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
    background-color: rgba(138, 185, 255, 0.664);
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

  span {
    font-weight: bold;
  }
`;

export default Card;
