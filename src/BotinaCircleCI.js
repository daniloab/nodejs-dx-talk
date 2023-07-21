import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1200px;
`;

const BotinaCircleCi = () => {
  return (
    <>
      <h1>BOTina - CircleCI Release Workflow</h1>
      <Img src="./img/botina-circleci-workflow.png" />
    </>
  );
};

export default BotinaCircleCi;
