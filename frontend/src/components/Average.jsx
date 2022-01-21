import React from "react";
import styled from "styled-components";

const StyledAverage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledContent = styled.p`
  color: var(--color-purple);
  text-align: center;
  font-size: 40px;
  font-weight: 800;
`;

const Average = ({ average }) => {
  return (
    <StyledAverage>
      <h2 className="subtitle" >Edad promedio de los clientes</h2>
      <StyledContent>{average} años</StyledContent>
    </StyledAverage>
  )
}

export default Average;
