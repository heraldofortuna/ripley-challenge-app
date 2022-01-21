import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
`;

const StyledContainer = styled.div`
  background-color: var(--color-dark);
  padding: 20px 0;
  color: var(--color-white);
  display: grid;
  place-items: center;
  gap: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <h1>Reto Fullstack Ripley</h1>
        <nav>
          <Link to="/create">Añadir un cliente</Link>
          <Link to="/">Lista de clientes</Link>
        </nav>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header;