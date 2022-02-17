import React from "react";

import styled from "styled-components";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Title>HOME</Title>
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

export default Home;
