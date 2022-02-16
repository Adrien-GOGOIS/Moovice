import React from "react";

import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Affiche du film" />
        <p>{this.props.title}</p>
        <p>{this.props.year}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
