import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  width: 600px;
`;

const ExampleCI = () => {
  return (
    <>
      <h1>Examples of CI/CD to your Projects</h1>
      <Img src="./img/logos.png" />
    </>
  );
};

export default ExampleCI;
