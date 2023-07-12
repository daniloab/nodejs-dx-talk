import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
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
        <h1>Materialized Views with MongoDB</h1>
        <Img src="./img/cover.png" width={"400px"} />
        <h3>Danilo Assis</h3>
      </Container>
    </Background>
  );
};

export default Cover;
