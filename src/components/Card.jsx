import React from "react";

import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"
          alt="Affiche du film"
        />
        <p>{this.props.title}</p>
        <p>{this.props.year}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
