import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  width: 1500px;
`;

const ExampleActions = () => {
  return (
    <>
      <h1>Dependabot Working</h1>
      <Img src="./img/actions.png" />
    </>
  );
};

export default ExampleActions;
