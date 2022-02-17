import React from "react";

const storage = localStorage.getItem("savedMovies");
console.log(storage);

class Favorites extends React.Component {
  getStorage() {}

  render() {
    return <h1>FAVORITES</h1>;
  }
}

export default Favorites;
