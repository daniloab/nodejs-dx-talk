import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #04010F;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #03d69d;
`;

const Img = styled.img``;

const Cover = () => {
  return (
    <Background>
      <Container>
        <h1>DX with Node Js</h1>
        <h2>How to improve your developing experience with Node Js</h2>
        <Img src="./img/nodejs-1-logo-png-transparent.png" width={"400px"} />
        <h3>Danilo Assis</h3>
      </Container>
    </Background>
  );
};

export default Cover;
